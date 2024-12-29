const morgan = require("morgan");
const express = require("express");
const { shortURL, longURL } = require("./urlController");
const app = express();

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));

//// Some MiddleWare function for testing???

app.use((req, res, next) => {
  console.log("hello from the middleware");
  next();
});

app.use((req, res, next) => {
  console.log(
    `[${req.method}] ${req.originalUrl} at ${new Date().toISOString()}`
  );
  next();
});
/////////////////////////////////////////////
// setting the routes and dedicated function
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the server",
  });
});
app.post("/", shortURL);
app.get("/:id", longURL);

module.exports = app;
