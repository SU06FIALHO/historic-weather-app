function updateWeather(response) {
  let tempElement = document.querySelector("#temper");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-display");
  let detailsElement = document.querySelector("#weather-details");
  let humidityElement = document.querySelector("#humidity-value");
  let windElement = document.querySelector("#wind-value");
  let timeElement = document.querySelector("#time-value");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#weather-icon");

  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-emoji" />`;

  timeElement.innerHTML = displayDate(date);
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  windElement.innerHTML = `${response.data.wind.speed} km/h`;
  detailsElement.innerHTML = response.data.condition.description;
  
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temperature);
  
  
}

function displayDate(date) {
  
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  let hours = date.getHours();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  let day = days [date.getDay()];
  return `${day} ${hours}:${minutes},`;
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
