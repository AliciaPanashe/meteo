function updateWeather(response) {
  let cityInput = document.querySelector("#current-city");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = response.data.temperature.current;
  let emojiElement = document.querySelector("#emoji");

  cityInput.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  emojiElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-temperature-emoji" />`;
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  // call an API and update user interface

  let apikey = "8c8ca73cb8675t3o145bd7d07f4ef1f6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
  axios.get(apiUrl).then(updateWeather);
  console.log(apiUrl);
}

function enterCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", enterCity);

searchCity("Germiston");
