const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const upload = multer({ dest: "uploads/" });
const Memoire = require("../models/memoire");
const Merimee = require("../models/merimee");
const Palissy = require("../models/palissy");
const {
  formattedNow,
  getNewId,
  checkESIndex,
  updateNotice,
  lambertToWGS84
} = require("./utils");

const { capture } = require("./../sentry.js");
const passport = require("passport");

function transformBeforeUpdate(notice) {
  notice.DMAJ = formattedNow();
  notice.CONTIENT_IMAGE =
    notice.MEMOIRE && notice.MEMOIRE.length ? "oui" : "non";
  if (notice.COOR && notice.ZONE) {
    notice.POP_COORDONNEES = lambertToWGS84(notice.COOR, notice.ZONE);
  }
  notice.POP_CONTIENT_GEOLOCALISATION =
    notice.POP_COORDONNEES && notice.POP_COORDONNEES.lat ? "oui" : "non";
}

function transformBeforeCreate(notice) {
  notice.DMAJ = notice.DMIS = formattedNow();
  notice.CONTIENT_IMAGE =
    notice.MEMOIRE && notice.MEMOIRE.length ? "oui" : "non";
  if (notice.COOR && notice.ZONE) {
    notice.POP_COORDONNEES = lambertToWGS84(notice.COOR, notice.ZONE);
  }
  notice.POP_CONTIENT_GEOLOCALISATION =
    notice.POP_COORDONNEES && notice.POP_COORDONNEES.lat ? "oui" : "non";

  switch (notice.REF.substring(0, 2)) {
    case "IA":
      notice.DISCIPLINE = notice.PRODUCTEUR = "Inventaire";
      break;
    case "PA":
      notice.DISCIPLINE = notice.PRODUCTEUR = "Monuments Historiques";
      break;
    case "EA":
      notice.DISCIPLINE = notice.PRODUCTEUR = "Architecture";
      break;
    default:
      notice.DISCIPLINE = notice.PRODUCTEUR = "Null";
      break;
  }
}

function checkIfMemoireImageExist(notice) {
  return new Promise(async (resolve, reject) => {
    const obj = await Memoire.find({ LBASE: notice.REF });
    if (obj) {
      const arr = obj.map(e => {
        return { ref: e.REF, url: e.IMG };
      });
      resolve(arr);
      return;
    }
    resolve([]);
  });
}

function populateMerimeeREFO(notice) {
  return new Promise(async (resolve, reject) => {
    if (!Array.isArray(notice.REFA)) {
      resolve();
    }
    for (var i = 0; i < notice.REFA.length; i++) {
      const obj = await Merimee.findOne({ REF: notice.REFA[i] });
      if (obj && Array.isArray(obj.REFO) && !obj.REFO.includes(notice.REF)) {
        obj.REFO.push(notice.REF);
        await obj.save();
      }
    }
    resolve();
  });
}

router.get(
  "/newId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const prefix = req.query.prefix;
    const dpt = req.query.dpt;

    if (!prefix || !dpt) {
      return res.status(500).send({ error: "Missing dpt or prefix" });
    }

    getNewId(Palissy, prefix, dpt)
      .then(id => {
        return res.status(200).send({ id });
      })
      .catch(error => {
        return res.status(500).send({ error });
      });
  }
);

router.put(
  "/:ref",
  passport.authenticate("jwt", { session: false }),
  upload.any(),
  async (req, res) => {
    try {
      const ref = req.params.ref;
      const notice = JSON.parse(req.body.notice);
      const arr = await checkIfMemoireImageExist(notice);
      notice.MEMOIRE = arr;

      //Update IMPORT ID
      if (notice.POP_IMPORT.length) {
        const id = notice.POP_IMPORT[0];
        delete notice.POP_IMPORT;
        notice.$push = { POP_IMPORT: mongoose.Types.ObjectId(id) };
      }

      //Add generate fields
      transformBeforeUpdate(notice);

      await updateNotice(Palissy, ref, notice);

      await populateMerimeeREFO(notice);
      res.status(200).send({ success: true, msg: "OK" });
    } catch (e) {
      capture(e);
      res.status(500).send({ success: false, msg: JSON.stringify(e) });
    }
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.any(),
  async (req, res) => {
    try {
      const notice = JSON.parse(req.body.notice);
      const arr = await checkIfMemoireImageExist(notice);
      await populateMerimeeREFO(notice);
      notice.MEMOIRE = arr;
      //Add generate fields
      transformBeforeCreate(notice);

      const obj = new Palissy(notice);
      //send error if obj is not well sync with ES
      checkESIndex(obj);
      await obj.save();
      res.status(200).send({ success: true, msg: "OK" });
    } catch (e) {
      capture(e);
      res.status(500).send({ success: false, msg: JSON.stringify(e) });
    }
  }
);

router.get("/:ref", (req, res) => {
  const ref = req.params.ref;
  Palissy.findOne({ REF: ref }, (err, notice) => {
    if (err) {
      capture(err);
      return res.status(500).send(err);
    }
    if (!notice) {
      return res.sendStatus(404);
    }
    res.status(200).send(notice);
  });
});

router.get("/", (req, res) => {
  const offset = parseInt(req.query.offset) || 0;
  const limit = parseInt(req.query.limit) || 20;
  Palissy.paginate({}, { offset, limit }).then(results => {
    res.status(200).send(results.docs);
  });
});

router.delete(
  "/:ref",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const ref = req.params.ref;
    Palissy.findOneAndRemove({ REF: ref }, error => {
      if (error) {
        capture(error);
        return res.status(500).send({ error });
      }
      return res.status(200).send({});
    });
  }
);

module.exports = router;
