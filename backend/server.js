const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
dotenv.config({
  path: "./config.env",
});

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    dbName: "URL_Shortner",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection is stablished");
  });

const port = 3000;
const server = app.listen(port, () => {
  console.log(`App is running on a server on port :${port}`);
});
