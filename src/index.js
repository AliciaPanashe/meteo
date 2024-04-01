function enterCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");
  let cityInput = document.querySelector("#current-city");
  cityInput.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", enterCity);
