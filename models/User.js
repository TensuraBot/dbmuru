const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  whatsappNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  yen: { type: Number, default: 0 },
  level: { type: Number, default: 0 },
  nickname: { type: String, default: "New User" },
  inventory: { type: Array, default: [] },
});

module.exports = mongoose.model("User", userSchema);
