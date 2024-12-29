const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const { shortURL, longURL } = require("./urlController");
const app = express();

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:3001", // Replace with your frontend's URL
    methods: ["GET", "POST"], // Allow specific methods
    credentials: true, // If your frontend needs cookies or authorization headers
  })
);

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
app.all("*", (req, res) => {
  res.status(400).json({
    message: "Requested shortURL is not generated or deleted from our service",
  });
});
module.exports = app;
