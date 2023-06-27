const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const nodemailer = require("nodemailer");
const cors = require("cors");
const fs = require("fs");
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hlw");
});

app.post("/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "info@kusheldigi.com",
      pass: "KDS@info@3421",
    },
    from: "info@kusheldigi.com",
    tls: {
      rejectUnauthorized: false,
    },
  });

  // const htmlToSend = template(replacements);

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Kushel Digi Solutions" <info@kusheldigi.com>',
    to: "info@kusheldigi.com",
    subject: "Contact Form",
    text: `
        <div>
            <div>Name: ${name}</div>
            <div>Phone: ${phone}</div>
            <div>Email: ${email}</div>
            <div>Service: ${service}</div>
            <div>Message: ${message}</div>
        </div>
    `,
    html: `
            <div>
                <div>Name: ${name}</div>
                <div>Phone: ${phone}</div>
                <div>Email: ${email}</div>
                <div>Service: ${service}</div>
            <div>Message: ${message}</div>
            </div>
        `,
  });

  res.json({ success: true, message: "Email Sent Successfully" });
});

app.post("/contact1", async (req, res) => {
  const { company1, name1, email1, phone1, service1, message1 } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "info@kusheldigi.com",
      pass: "KDS@info@3421",
    },
    from: "info@kusheldigi.com",
    tls: {
      rejectUnauthorized: false,
    },
  });

  // const htmlToSend = template(replacements);

  // send mail with defined transport object
  let info1 = await transporter.sendMail({
    from: '"Kushel Digi Solutions" <info@kusheldigi.com>',
    to: "info@kusheldigi.com",
    subject: "Contact Form",
    text: `
        <div>
            <div>Company: ${company1}</div>
            <div>Name: ${name1}</div>
            <div>Email: ${email1}</div>
            <div>Phone: ${phone1}</div>
            <div>Service: ${service1}</div>
            <div>Message: ${message1}</div>
        </div>
    `,
    html: `
    <div>
    <div>Company: ${company1}</div>
    <div>Name: ${name1}</div>
    <div>Email: ${email1}</div>
    <div>Phone: ${phone1}</div>
    <div>Service: ${service1}</div>
    <div>Message: ${message1}</div>
</div>
        `,
  });

  res.json({ success: true, message: "Email Sent successfully" });
});

app.post("/contact2", async (req, res) => {
  const { name2, phone2, email2, message2 } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "info@kusheldigi.com",
      pass: "KDS@info@3421",
    },
    from: "info@kusheldigi.com",
    tls: {
      rejectUnauthorized: false,
    },
  });

  
  let info2 = await transporter.sendMail({
    from: '"Kushel Digi Solutions" <info@kusheldigi.com>',
    to: "info@kusheldigi.com",
    subject: "Contact Form",
    text: `
        <div>
            <div>Name: ${name2}</div>
            <div>phone: ${phone2}</div>
            <div>email: ${email2}</div>
            <div>Message: ${message2}</div>
        </div>
    `,
    html: `
    <div>
    <div>Name: ${name2}</div>
    <div>phone: ${phone2}</div>
    <div>email: ${email2}</div>
    <div>Message: ${message2}</div>
</div>
        `,
  });

  res.json({ success: true, message: "Email Sent successfully" });
});

app.listen(PORT, () => {
  console.log("server is runing on port", PORT);
});
