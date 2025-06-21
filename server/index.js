import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { login, register } from "./controllers/authController.js";
import { postRide, getRides } from "./controllers/rideController.js";
import authenticateToken from "./middleware/middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Register route
app.post("/register", register);

// Login route
app.post("/login", login);

// User creation route (for testing purposes)
app.post("/rides", authenticateToken, postRide);

// Get rides route
app.get("/rides", getRides);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
