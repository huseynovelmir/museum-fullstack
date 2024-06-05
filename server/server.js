const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const Schema = mongoose.Schema;

const Portrets = new Schema({
  name: { type: String, default: "hahaha" },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer,
});

const PORT = process.env.PORT;
const URL = process.env.URL;

console.log(PORT);

app.listen(PORT);

mongoose.connect(URL).then(() => console.log("Connected!"));
