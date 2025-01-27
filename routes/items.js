const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

// Mendapatkan semua item
router.get("/", async (req, res) => {
  try {
    const items = await Item.find(); // Ambil semua item dari database
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
});

// Menambahkan item baru (Opsional - untuk admin)
router.post("/", async (req, res) => {
  const { id, name, link, star, price } = req.body;

  // Validasi data
  if (!id || !name || !link || !star || !price) {
    return res.status(400).json({ message: "Data item tidak lengkap." });
  }

  const newItem = new Item({ id, name, link, star, price });

  try {
    await newItem.save(); // Simpan item ke database
    res.status(201).json({ message: "Item berhasil ditambahkan." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
});

module.exports = router;
