const express = require("express");
const User = require("../models/User");
const authenticate = require("../middleware/authenticate");
const router = express.Router();

router.get("/profile", authenticate, async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user);
});

module.exports = router;
