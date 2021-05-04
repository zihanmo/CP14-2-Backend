/** @format */

require("dotenv").config();

const express = require("express");
require("express-async-errors");
const routes = require("./routes");
const { connectToDB } = require("./utils/db");
var cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api", routes);
app.use(errorHandler);
var fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true
  })
);

var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dzjg12m3b",
  api_key: "518216572745741",
  api_secret: "8qKRPoZpIIYmdB4CG2kVUgTwqj0"
});

connectToDB()
  .then(() => {})
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

app.get("/", (req, res) => res.send("Welcome to backend"));
app.post("/upload", function(req, res, next) {
  var data = JSON.parse(req.body.file);
  var image = data.uri;
  cloudinary.uploader.upload(image, function(err, result) {
    res.send(result);
  });
});

const port = process.env.PORT || 12345;
app.listen(port, () => {
  console.log("listening");
});
