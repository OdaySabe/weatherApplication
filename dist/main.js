function update(updatedCity) {
  data.updateCity($(updatedCity).data("name")).then(function () {
    $("#templatecontainer").empty();
    let render = Render(data.cityData, true);
    render.render();
  });
}
function sendCity(plusIcon) {
  data.saveCity($(plusIcon).data("name")).then(function () {
    let render = Render(data.cityData, true);
    render.renderReplacing(plusIcon, true);
  });
}
function deleteCity(minusIcon) {
  data.removeCity($(minusIcon).data("name")).then(function () {
    let render = Render(data.cityData, true);
    render.renderReplacing(minusIcon, false);
  });
}
function handleSearch() {
  let cityName = $("#city").val();
  data.getCityData(cityName).then(function (city) {
    let render = Render([city], false);
    render.render();
  });
}
function loadPage() {
  $(window).on("load", function () {
    data.getDataFromDB().then(function () {
      let render = Render(data.cityData, true);
      render.render();
    });
  });
}
////////////// all above are helper function using for Events being active from user
// main.js hander the events only
///Render.js only handle Rendering and updating new elements or replace icons
///TempManager.js only one can talk with server and store (data) temprorey to render them.
// api.js only handle request with external APIs
//City.js only just a dataBase.

let data = new Data();
loadPage();
