const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const ImportSchema = new Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "user" },
  importedAt: { type: Date },
  created: Number,
  updated: Number,
  delete: Number,
  unChange: Number
});

module.exports = mongoose.model("Import", ImportSchema);
