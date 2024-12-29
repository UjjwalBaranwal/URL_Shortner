const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "id is required"],
    unique: [true, "id should be unique"],
  },
  shortURL: {
    type: Number,
    required: [true, "shortURL is required"],
  },
  longURL: {
    type: String,
    required: [true, "longURL is required"],
  },
  clicks: {
    type: Number,
    default: 0,
  },
});

const URL = new mongoose.model("URL", urlSchema);
module.exports = URL;
