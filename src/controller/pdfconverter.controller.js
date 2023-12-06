const puppeteer = require("puppeteer");

const convertHtmlToPdf = async (htmlFilePath) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const htmlContent = require("fs").readFileSync(htmlFilePath, "utf8");

  await page.setContent(htmlContent);
  const pdfBuffer = await page.pdf();

  await browser.close();

  return pdfBuffer;
};

module.exports = convertHtmlToPdf;
