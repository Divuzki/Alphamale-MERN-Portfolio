import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mediaRoutes from "./routes/media.js";
import CategoryRoutes from "./routes/category.js";
import SubcategoryRoutes from "./routes/subcategory.js";
import "colors";
import "dotenv/config";
import errorHandler from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(`/api/media`, mediaRoutes);
app.use(`/api/category`, CategoryRoutes);
app.use(`/api/subcategory`, SubcategoryRoutes);
app.use(errorHandler);
// Mailer Config
let transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Routes
app.get("/", (req, res) => {
  // res.sendFile("index.html")
  try {
    res.sendFile(__dirname + "/index.html");
  } catch (err) {
    res.status(500).send("internal server error occurred");
  }
  res.send(
    "This Api was created by Divine Ikhuoria aka divuzki https://www.github.com/divuzki"
  );
});

app.post("/send-mail", (req, res) => {
  const { email, message, text } = req.body;
  console.log(req.body);
  let mailOptions = {
    from: "Datalphamale Studios <datalphamale7@gmail.com>", // Sender address
    to: `Client <${email}>`, // List of recipients
    subject: `New Inquiries From ${email}`, // Subject line
    html: ``,
  };

  if (text) {
    mailOptions = { ...mailOptions, text: text };
  }
  if (message) {
    mailOptions = { ...mailOptions, html: `${message}` };
  }

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      res.send("done.");
    }
  });
});

app.listen(PORT, () =>
  console.log(
    `Server running on port: ${`http://localhost:${PORT}`.bgBlue}`.white
  )
);
