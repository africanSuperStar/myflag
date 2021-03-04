const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require("cors")({
    origin: true
});

const admin = require("firebase-admin");
admin.initializeApp();

const myflag_email = functions.config().myflag.myflag_email;
const myflag_passwd = functions.config().myflag.myflag_passwd;

const createTransporter = async () => {
    const transporter = nodemailer.createTransport(smtpTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: myflag_email,
        pass: myflag_passwd
      }
    }));
  
    return transporter;
};

exports.applyOnline = functions.https.onRequest(async (req, res) => {     
    return cors(req, res, async () => {
      const { alt_number, message, form } = req.body;

      var text = `<div>
          <h4>myflag Online Application</h4>
          <ul>
            <li>
              First Name - ${form.first_name || ""}
            </li>
            <li>
              Last Name - ${form.last_name || ""}
            </li>
            <li>
              Email - ${form.from_email || ""}
            </li>
            <li>
              Mobile - ${form.mobile_number || ""}
            </li>
            <li>
              Alternative Number - ${alt_number || ""}
            </li>
            <li>
              Preferred Contact Method - ${form.sel1 || ""}
            </li>
            <li>
              Alternative Number - ${alt_number || ""}
            </li>
            <li>
              ID Number - ${form.id_number || ""}
            </li>
            <li>
              Marital Status - ${form.marital_status || ""}
            </li>
            <li>
              Total Approximated Debt - ${form.total_debt || ""}
            </li>
            <li>
              Interested In - ${form.interested_in || ""}
            </li>
          </ul>
          <h4>Message</h4>
          <p>${message || ""}</p>
        </div>`;
         
        let transporter = await createTransporter();

        const mailOptions = {
          to: "info@myflag.co.za",
          from: myflag_email,
          subject: `myflag Application: ${form.first_name} ${form.last_name}`,
          text: text,
          html: text
        };
        
        transporter.sendMail(mailOptions, (error, _) => {
         if(error) {
            console.log(error.message);
         }
         res.status(200).send({
           message: "Successfully sent email."
         })
        });
    })
});

exports.contactUs = functions.https.onRequest(async (req, res) => {     
  return cors(req, res, async () => {
    const { message, form } = req.body;

    var text = `<div>
        <h4>Contact myflag</h4>
        <ul>
          <li>
            Full Name - ${form.name || ""}
          </li>
          <li>
            Email - ${form.from_email || ""}
          </li>
          <li>
            Mobile - ${form.mobile_number || ""}
          </li>
        </ul>
        <h4>Message</h4>
        <p>${message || ""}</p>
      </div>`;
       
      let transporter = await createTransporter();

      const mailOptions = {
        to: "info@myflag.co.za",
        from: myflag_email,
        subject: `myflag Contact Us: ${form.name}`,
        text: text,
        html: text
      };
      
      transporter.sendMail(mailOptions, (error, _) => {
       if(error) {
          console.log(error.message);
       }
       res.status(200).send({
         message: "Successfully sent email."
       })
      });
  })
});