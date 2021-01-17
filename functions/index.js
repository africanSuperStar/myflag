const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const admin = require("firebase-admin");
admin.initializeApp();

var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "72690b2b3e81b0",
      pass: "14dc6cc7453ec6"
    }
});

exports.emailSender = functions.https.onRequest((req, res) => {     
    const mailOptions = {
        from: 'test@example.com',
        to: req.query.dest,
        subject: 'Email Sent via Firebase',
        html: '<b>Sending emails with Firebase is easy!</b>'
    };

    return transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            return res.send(err.toString());
        }
        return res.send('Email sent successfully');
    });
});