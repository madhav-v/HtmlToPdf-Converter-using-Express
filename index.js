const http = require("http");
const express = require("express");
const app = express();
const router = require("./src/routes/uploadfile.route");

app.use("/upload", router);

app.use("/", (req, res) => {
  res.send("HTML to pdf converter");
});

const server = http.createServer(app);
const serv = server.listen(3005, "localhost", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running at port 3005");
  }
});
