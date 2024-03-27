function submitCitySearch (event) {
  event.preventDefault();
  let citySearchForm = document.querySelector("#city-search-form");
  let cityElement = document.querySelector ("#city-display");
  cityElement.innerHTML= citySearchForm.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener ("submit", submitCitySearch);