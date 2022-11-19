const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const routes = require("./routes");
const app = express();

// Database Connection
connectDB();

// Use Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Use Router
// app.use(routes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "server running" });
});

app.listen();
