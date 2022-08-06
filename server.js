const express = require("express");
const mongoose = require("mongoose");
const api = require("./route/api");
const path = require("path");
const app = express();
const PORT = 4200;
mongoose.connect("mongodb://localhost/WeatherApp", { useNewUrlParser: true });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use("/", api);
app.listen(PORT, function () {
  console.log("Server start listining on port " + PORT);
});
