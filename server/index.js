import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mediaRoutes from "./routes/media.js";
import "colors";
import "dotenv/config";
import errorHandler from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(`/api/media`, mediaRoutes);
app.use(errorHandler);
// Routes
app.get("/", (req, res) => {
  // res.sendFile("index.html")
  try {
    res.sendFile(__dirname + "/index.html");
  } catch (err) {
    res.status(500).send("internal server error occurred");
  }
  // res.send(
  //   "This Api was created by Divine Ikhuoria aka divuzki https://www.github.com/divuzki"
  // )
});

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

app.listen(PORT, () =>
  console.log(
    `Server running on port: ${`http://localhost:${PORT}`.bgBlue}`.white
  )
);
