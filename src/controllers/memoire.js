const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const mongoose = require("mongoose");
const Memoire = require("../models/memoire");
const Merimee = require("../models/merimee");
const Palissy = require("../models/palissy");
const {
  uploadFile,
  formattedNow,
  checkESIndex,
  updateNotice,
  deleteFile
} = require("./utils");
const { capture } = require("./../sentry.js");
const passport = require("passport");

function findCollection(ref = "") {
  const prefix = ref.substring(0, 2);
  switch (prefix) {
    case "EA":
    case "PA":
    case "IA":
      return Merimee;
    case "IM":
    case "PM":
      return Palissy;
    default:
      return "";
  }
}

function getMerimeeOrPalissyNotice(memoire) {
  return new Promise(async (resolve, reject) => {
    if (!memoire.LBASE) {
      console.log(`No link LBASE ${memoire.REF}`);
      resolve(null);
      return;
    }

    const collection = findCollection(memoire.LBASE);
    if (!collection) {
      console.log(`No collection ${memoire.LBASE}`);
      reject();
      return;
    }
    const notice = await collection.findOne({ REF: memoire.LBASE });
    resolve(notice);
  });
}

function removeLinkedNotice(memoire) {
  return new Promise(async (resolve, reject) => {
    try {
      const notice = await getMerimeeOrPalissyNotice(memoire);
      if (!notice) {
        resolve();
        return;
      }
      await notice.collection.updateOne(
        { _id: notice._id },
        { $pull: { MEMOIRE: { ref: memoire.REF } } }
      );
      resolve();
    } catch (e) {
      console.log(e);
      reject();
    }
  });
}
function updateLinkedNotice(memoire) {
  return new Promise(async (resolve, reject) => {
    const notice = getMerimeeOrPalissyNotice(memoire);
    if (!notice) {
      console.log(`No notice ${memoire.LBASE}`);
      resolve({ success: false, msg: `No notice ${memoire.LBASE}` });
      return;
    }

    let isInArray = notice.MEMOIRE.some(function(doc) {
      return doc.equals(memoire.REF, doc.ref);
    });

    if (!isInArray) {
      notice.MEMOIRE.push({ ref: memoire.REF, url: memoire.IMG });
      notice.save().then(() => {
        resolve({ success: true, msg: `` });
      });
    } else {
      resolve({ success: true, msg: `` });
    }
  });
}

router.put(
  "/:ref",
  passport.authenticate("jwt", { session: false }),
  upload.any(),
  (req, res) => {
    const ref = req.params.ref;
    const notice = JSON.parse(req.body.notice);

    notice.DMAJ = formattedNow();

    const arr = [];
    for (let i = 0; i < req.files.length; i++) {
      //TODO
      //DELETE the current file IMAGE when update a new file

      arr.push(
        uploadFile(
          `memoire/${notice.REF}/${req.files[i].originalname}`,
          req.files[i]
        )
      );
    }

    //Update IMPORT ID
    if (notice.POP_IMPORT.length) {
      const id = notice.POP_IMPORT[0];
      delete notice.POP_IMPORT;
      notice.$push = { POP_IMPORT: mongoose.Types.ObjectId(id) };
    }

    arr.push(updateNotice(Memoire, ref, notice));

    arr.push(updateLinkedNotice(notice));

    Promise.all(arr)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(e => {
        capture(e);
        res.sendStatus(500);
      });
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
          `memoire/${notice.REF}/${req.files[i].originalname}`,
          req.files[i]
        )
      );
    }

    arr.push(updateLinkedNotice(notice));

    const obj = new Memoire(notice);

    //send error if obj is not well sync with ES
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
  Memoire.paginate({}, { offset, limit }).then(results => {
    res.status(200).send(results.docs);
  });
});

router.get("/:ref", (req, res) => {
  const ref = req.params.ref;
  Memoire.findOne({ REF: ref }, (err, notice) => {
    if (err) {
      capture(err);
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
      const doc = await Memoire.findOne({ REF: ref });
      if (!doc) {
        return res.status(500).send({
          error: `Je ne trouve pas la notice memoire ${ref} à supprimer`
        });
      }

      await removeLinkedNotice(doc);

      const arr = [deleteFile(doc.IMG), doc.remove()];
      await Promise.all(arr);
      return res.status(200).send({});
    } catch (error) {
      capture(error);
      console.log("error", error);
      return res.status(500).send({
        error
      });
    }
  }
);

module.exports = router;
