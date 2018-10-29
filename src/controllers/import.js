const express = require("express");
const router = express.Router();
const passport = require("passport");
const { capture } = require("../sentry.js");

const Import = require("../models/import");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const body = JSON.parse(req.body);
    const obj = new Import(body);
    obj.save().then(e => {
      res.send({ success: true, msg: "OK" });
    });
  }
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      imports = await Import.find({});
    } catch (e) {
      capture(e);
      return res.status(500).send({ e });
    }
    res.status(200).send(imports);
  }
);

module.exports = router;
