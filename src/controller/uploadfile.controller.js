const convertHtmlToPdf = require("./pdfconverter.controller");
const sendmail = require("../services/mailing.services");

const UploadFile = async (req, res, next) => {
  try {
    const pdfBuffer = await convertHtmlToPdf(req.file.path);
    const emailOptions = {
      email: req.body.email,
      subject: "Succesfully added Html file",
      pdfBuffer: pdfBuffer,
    };
    console.log(pdfBuffer);
    console.log(req.body.email);

    await sendmail(emailOptions);
    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { UploadFile };
