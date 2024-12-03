/** Server.js
 * This is where express app is initialized and started
 */
/* Dependencies */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); 
const app = express();
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;

/* Middleware */
app.use(cors());
app.use(express.json());

/* MongoDB connection */
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express API!");
});

const itemRoutes = require("./routes/itemRoutes");

app.use("/api/items", itemRoutes);


// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));