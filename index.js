const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const nodemailer = require("nodemailer");
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hlw");
});

app.post('/contact', async (req, res) => {

    const { name, email, phone, message } = req.body;

    let transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'info@kusheldigi.com',
            pass: 'KDS@info@3421',
        },
        from: 'info@kusheldigi.com',
        tls: {
            rejectUnauthorized: false
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
        </div>
    `,
        html: `
            <div>
                <div>Name: ${name}</div>
                <div>Phone: ${phone}</div>
                <div>Email: ${email}</div>
            </div>
        `
    });

    res.json({ success: true, message: "Email Sent" });
});

app.listen(PORT, () => {
    console.log('server is runing on port', PORT);
});
