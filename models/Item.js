const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  link: { type: String, required: true },
  star: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Item", itemSchema);
