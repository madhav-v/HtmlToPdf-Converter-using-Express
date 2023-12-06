const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const sendmail = async (options) => {
  console.log("options are", options);
  console.log("host is", process.env.SMTP_PASSWORD);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const { email, pdfBuffer, subject } = options;

  const html = `Dear User<br/>
    Your file has been successfully uploaded and converted to pdf.
    Please check the attachment.
  `;

  const mailoptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject,
    html,
    attachments: [
      {
        filename: "file.pdf",
        content: pdfBuffer,
      },
    ],
  };

  await transporter.sendMail(mailoptions);
};

module.exports = sendmail;
