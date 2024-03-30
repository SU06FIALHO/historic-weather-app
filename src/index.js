function updateWeather(response) {
  let tempElement = document.querySelector("#temper");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-display");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temperature);
}

function apiSearchCity (city) {
let apiKey = "74ba2ac4o95a095ca8b15001f53d3et4";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeather);
}


function submitCitySearch (event) {
  event.preventDefault();
  let citySearchForm = document.querySelector("#city-search-form");
  
  apiSearchCity(citySearchForm.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener ("submit", submitCitySearch);

apiSearchCity ("Lisbon");