const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const City = new Schema({
  name: String,
  temperature: Number,
  condition: String,
  conditionPic: String,
});
const cityModel = mongoose.model("WeatherApp", City);
module.exports = cityModel;
