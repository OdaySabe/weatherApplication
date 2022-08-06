const express = require("express");
const router = express.Router();
const axios = require("axios");
const City = require("../model/City");

router.get("/city/:cityName", function (request, response) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${request.params.cityName}&units=metric&appid=5c0df1570193de98d2da5b872e6dbec3`
    )
    .then((weatherApi) =>
      response.send({
        name: request.params.cityName.toString(),
        temperature: weatherApi.data.main.temp,
        condition: weatherApi.data.weather[0].description,
        conditionPic: `https://openweathermap.org/img/wn/${weatherApi.data.weather[0].icon}@2x.png`,
      })
    );
});
//////
router.get("/cities", function (request, response) {
  City.find({}).exec(function (error, cities) {
    response.send(cities);
  });
});
/////
router.post("/city/:newCity", function (request, response) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${request.params.newCity}&units=metric&appid=5c0df1570193de98d2da5b872e6dbec3`
    )
    .then((weatherApi) => {
      const newCity = new City({
        name: request.params.newCity.toString(),
        temperature: weatherApi.data.main.temp,
        condition: weatherApi.data.weather[0].description,
        conditionPic: `https://openweathermap.org/img/wn/${weatherApi.data.weather[0].icon}@2x.png`,
      });
      newCity.save();
      response.send(newCity);
    });
});

router.delete("/city/:deletCity", function (req, res) {
  City.find({ name: req.params.deletCity.toString() })
    .limit(1)
    .remove()
    .then(res.send(req.params.deletCity.toString()));
});
router.put("/city/:cityName", function (request, response) {
  City.find({ name: request.params.cityName.toString() })
    .remove()
    .exec(function (error, result) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${request.params.cityName.toString()}&units=metric&appid=5c0df1570193de98d2da5b872e6dbec3`
        )
        .then((weatherApi) => {
          result = new City({
            name: request.params.cityName.toString(),
            temperature: weatherApi.data.main.temp,
            condition: weatherApi.data.weather[0].description,
            conditionPic: `https://openweathermap.org/img/wn/${weatherApi.data.weather[0].icon}@2x.png`,
          });
          result.save();
          response.send(result);
        });
    });
});
module.exports = router;
