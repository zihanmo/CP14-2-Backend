/** @format */

require("dotenv").config();

const express = require("express");
require("express-async-errors");
const routes = require("./routes");
const { connectToDB } = require("./utils/db");
var cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: "AKIA5DQGEK7O73PIN2VH",
  secretAccessKey: "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",
});
const { v1: uuidv1, v4: uuidv4 } = require("uuid");
const s3 = new AWS.S3();
app.use(cors({ origin: "*" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mB" }));

app.use("/api", routes);
app.use(errorHandler);

connectToDB()
  .then(() => {})
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

app.get("/", (req, res) => res.send("Welcome to backend"));
app.post("/upload", function (req, res, next) {
  const base64Data = req.body.uri.uri;
  buf = Buffer.from(
    base64Data.replace(/^data:application\/\w+;base64,/, ""),
    "base64"
  );
  const params = {
    Bucket: "my-cp-14-2",
    Key: uuidv1(),
    Body: buf,
    ACL: "public-read",
    ContentEncoding: "base64", // required
    ContentType: `application/pdf`,
  };
  s3.upload(params, (err, data) => {
    if (err) {
      return console.log(err);
    }
    res.send(data);
  });
});

const PORT = process.env.PORT || 12345;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
