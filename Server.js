import express from "express";
import { createTransport } from "nodemailer";
import pkg from "body-parser";
const { json, urlencoded } = pkg;
// import { json, urlencoded } from "body-parser";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(json());
app.use(urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/send-quote-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "bhatbhaibuilders@gmail.com", // Replace with your recipient email
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent successfully!");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
