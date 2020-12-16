function formatDate() {
  let dateTime = new Date();
  let hours = dateTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = dateTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[dateTime.getDay()];

  let year = dateTime.getFullYear();

  let date = dateTime.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let month = months[dateTime.getMonth()];

  document.querySelector("#date").innerHTML = `${day} ${hours}:${minutes}`;
  document.querySelector("#time").innerHTML = `${date}.${month}.${year}`;
}
formatDate();
function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let temperatureMaxElement = document.querySelector("#max-temp");
  let temperatureMinElement = document.querySelector("#min-temp");
  let temperatureFeelsElement = document.querySelector("#feels-temp");
  let cityElement = document.querySelector("#city");
  let countryElement = document.querySelector("#country");
  let skyElement = document.querySelector("#sky");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let pressureElement = document.querySelector("#pressure");
  //let dateElement = document.querySelector("#date");
  let mainIconElement = document.querySelector("#main-icon");

  celsiusTemperature = response.data.main.temp;
  celsiusMaxTemperature = response.data.main.temp_max;
  celsiusMinTemperature = response.data.main.temp_min;
  celsiusFeelsTemperature = response.data.main.feels_like;

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  temperatureMaxElement.innerHTML = Math.round(response.data.main.temp_max);
  temperatureMinElement.innerHTML = Math.round(response.data.main.temp_min);
  temperatureFeelsElement.innerHTML = Math.round(response.data.main.feels_like);
  cityElement.innerHTML = response.data.name;
  countryElement.innerHTML = response.data.sys.country;
  skyElement.innerHTML = response.data.weather[0].main;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  pressureElement.innerHTML = response.data.main.pressure;
  //dateElement.innerHTML = formatDate(response.data.dt * 1000);
  mainIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  mainIconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "58a0b6e26263101abdfda8d9e9d3a0f0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let fahrenheitTemperature = Math.round((celsiusTemperature * 9) / 5 + 32);
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);

  let temperatureMaxElement = document.querySelector("#max-temp");
  let fahrenheitMaxTemperature = Math.round(
    (celsiusMaxTemperature * 9) / 5 + 32
  );
  temperatureMaxElement.innerHTML = Math.round(fahrenheitMaxTemperature);

  let temperatureMinElement = document.querySelector("#min-temp");
  let fahrenheitMinTemperature = Math.round(
    (celsiusMinTemperature * 9) / 5 + 32
  );
  temperatureMinElement.innerHTML = Math.round(fahrenheitMinTemperature);

  let temperatureFeelsElement = document.querySelector("#feels-temp");
  let fahrenheitFeelsTemperature = Math.round(
    (celsiusFeelsTemperature * 9) / 5 + 32
  );
  temperatureFeelsElement.innerHTML = Math.round(fahrenheitFeelsTemperature);
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");

  let temperatureMaxElement = document.querySelector("#max-temp");
  temperatureMaxElement.innerHTML = Math.round(celsiusMaxTemperature);

  let temperatureMinElement = document.querySelector("#min-temp");
  temperatureMinElement.innerHTML = Math.round(celsiusMinTemperature);

  let temperatureFeelsElement = document.querySelector("#feels-temp");
  temperatureFeelsElement.innerHTML = Math.round(celsiusFeelsTemperature);
}

function searchLocation(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiKey = "58a0b6e26263101abdfda8d9e9d3a0f0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchCityAntwerp(antwerp) {
  let apiKey = "58a0b6e26263101abdfda8d9e9d3a0f0";
  let city = "Antwerp";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
  search(antwerp);
}
function searchCityKrakow(krakow) {
  let apiKey = "58a0b6e26263101abdfda8d9e9d3a0f0";
  let city = "Krakow";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
  search(krakow);
}

function searchCityBenidorm(benidorm) {
  let apiKey = "58a0b6e26263101abdfda8d9e9d3a0f0";
  let city = "Benidorm";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
  search(benidorm);
}
let celsiusTemperature = null;
let celsiusMaxTemperature = null;
let celsiusMinTemperature = null;
let celsiusFeelsTemperature = null;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let buttonAmsterdam = document.querySelector("#city-antwerp");
buttonAmsterdam.addEventListener("click", searchCityAntwerp);

let buttonKrakow = document.querySelector("#city-krakow");
buttonKrakow.addEventListener("click", searchCityKrakow);

let buttonBenidorm = document.querySelector("#city-benidorm");
buttonBenidorm.addEventListener("click", searchCityBenidorm);

search("Amsterdam");
