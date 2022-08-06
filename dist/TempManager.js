class Data {
  constructor() {
    this.cityData = [];
  }
  async getCityData(cityName) {
    const city = await $.ajax({
      method: "GET",
      url: `/city/${cityName}`,
      success: (cities) => {},
      error: (err) => {
        console.log(err);
      },
    });
    this.cityData.push(city);
    return city;
  }
  async getDataFromDB() {
    const cityFromDb = await $.ajax({
      method: "GET",
      url: "/cities",
      success: (cities) => {},
      error: (err) => {
        console.log(err);
      },
    });
    cityFromDb.forEach((city) => this.cityData.push(city));
  }
  async saveCity(newCity) {
    const NewSavedCityDB = await $.ajax({
      method: "POST",
      url: `/city/${newCity}`,
      success: (cities) => {},
      error: (err) => {
        console.log(err);
      },
    });
    this.cityData.push(NewSavedCityDB);
  }
  async removeCity(removedCity) {
    const City = await $.ajax({
      method: "DELETE",
      url: `/city/${removedCity}`,
      success: (cities) => {},
      error: (err) => {
        console.log(err);
      },
    });
    this.cityData.splice(
      this.cityData.indexOf((a) => (a.name = City)),
      1
    );
  }
  async updateCity(updateCity) {
    const City = await $.ajax({
      method: "PUT",
      url: `/city/${updateCity}`,
      success: (cities) => {},
      error: (err) => {
        console.log(err);
      },
    });
    this.cityData[this.cityData.indexOf((a) => (a.name = updateCity))] = City;
  }
}
