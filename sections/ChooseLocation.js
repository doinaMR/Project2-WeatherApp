const arad = document.querySelector(".arad");
const brasov = document.querySelector(".brasov");
const bucharest = document.querySelector(".dropdown-menu .bucharest");
const clujNapoca = document.querySelector(".cluj-napoca");
const craiova = document.querySelector(".craiova");
const iasi = document.querySelector(".iasi");
const oradea = document.querySelector(".dropdown-menu .oradea");
const sibiu = document.querySelector(".sibiu");
const timisoara = document.querySelector(".dropdown-menu .timisoara");

// Actualizarea lui Current city
function updateCurrentCity(city) {
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  // Actualizam orasul din localStorage.
  localStorage.setItem("city", city);
  // Actualizam orasul afisat pe ecran.
  updateCurrentCity(city);
  // Reafisam vremea curenta, pentru noul oras.
  displayCurrentWeather(city);
  displayForecast(city);
}

// EventListener:dropdown buttons.
arad.addEventListener("click", function () {
  updateWeather("Arad");
});
brasov.addEventListener("click", function () {
  updateWeather("Brasov");
});
bucharest.addEventListener("click", function () {
  updateWeather("București");
});
clujNapoca.addEventListener("click", function () {
  updateWeather("Cluj-Napoca");
});
craiova.addEventListener("click", function () {
  updateWeather("Craiova");
});
iasi.addEventListener("click", function () {
  updateWeather("Iasi");
});
oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});
sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
