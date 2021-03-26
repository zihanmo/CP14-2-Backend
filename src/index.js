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

connectToDB()
  .then(() => {})
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

app.listen(12345, () => {
  console.log("listening");
});
