const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const upload = multer({ dest: "uploads/" });
const Joconde = require("../models/joconde");
const { capture } = require("./../sentry.js");
const passport = require("passport");

const {
  uploadFile,
  deleteFile,
  formattedNow,
  checkESIndex,
  updateNotice,
  enrichBeforeSave
} = require("./utils");

router.put(
  "/:ref",
  passport.authenticate("jwt", { session: false }),
  upload.any(),
  async (req, res) => {
    const ref = req.params.ref;
    const notice = JSON.parse(req.body.notice);

    notice.DMAJ = formattedNow();

    try {
      const prevNotice = await Joconde.findOne({ REF: ref });
      const arr = [
        ...(prevNotice.IMG || [])
          .filter(x => !(notice.IMG || []).includes(x))
          .map(f => deleteFile(f)),
        ...req.files.map(f =>
          uploadFile(`joconde/${notice.REF}/${f.originalname}`, f)
        )
      ];

      // Update IMPORT ID
      if (notice.POP_IMPORT.length) {
        const id = notice.POP_IMPORT[0];
        delete notice.POP_IMPORT;
        notice.$push = { POP_IMPORT: mongoose.Types.ObjectId(id) };
      }

      // Add generate fields
      enrichBeforeSave(notice);

      // Update Notice
      arr.push(updateNotice(Joconde, ref, notice));

      await Promise.all(arr);
      res.sendStatus(200);
    } catch (e) {
      capture(e);
      res.sendStatus(500);
    }
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.any(),
  (req, res) => {
    const notice = JSON.parse(req.body.notice);
    notice.DMIS = notice.DMAJ = formattedNow();

    const arr = [];
    for (var i = 0; i < req.files.length; i++) {
      arr.push(
        uploadFile(
          `joconde/${notice.REF}/${req.files[i].originalname}`,
          req.files[i]
        )
      );
    }

    // Add generate fields
    enrichBeforeSave(notice);

    const obj = new Joconde(notice);

    // Send error if obj is not well sync with ES
    checkESIndex(obj);

    arr.push(obj.save());

    Promise.all(arr)
      .then(() => {
        res.send({ success: true, msg: "OK" });
      })
      .catch(e => {
        capture(e);
        res.sendStatus(500);
      });
  }
);

router.get("/", (req, res) => {
  const offset = parseInt(req.query.offset) || 0;
  const limit = parseInt(req.query.limit) || 20;
  Joconde.paginate({}, { offset, limit }).then(results => {
    res.status(200).send(results.docs);
  });
});

router.get("/:ref", (req, res) => {
  const ref = req.params.ref;
  Joconde.findOne({ REF: ref }, (err, notice) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (notice) {
      res.status(200).send(notice);
    } else {
      res.sendStatus(404);
    }
  });
});

router.delete(
  "/:ref",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const ref = req.params.ref;
      const doc = await Joconde.findOne({ REF: ref });
      if (!doc) {
        return res.status(500).send({
          error: `Je ne trouve pas la notice joconde ${ref} à supprimer`
        });
      }
      const arr = doc.IMG.map(f => deleteFile(f));
      arr.push(doc.remove());
      await Promise.all(arr);
      return res.status(200).send({});
    } catch (error) {
      capture(error);
      return res.status(500).send({
        error
      });
    }
  }
);

module.exports = router;
