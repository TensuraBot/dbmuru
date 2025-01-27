require("dotenv").config();
const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const itemRoutes = require("./routes/items");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  
  // Middleware untuk JSON parsing
  server.use(express.json());
  
  // MongoDB Connection
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected"))
    .catch((err) => console.error(err));

  // API routes
  server.use("/auth", authRoutes);
  server.use("/user", userRoutes);
  server.use("/items", itemRoutes);

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${PORT}`);
  });
});
