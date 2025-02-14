const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

// Salvarea orasului default,in localStorage.
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizarea orasului afisat.
currentCityTag.innerHTML = currentCity;
displayCurrentWeather(currentCity);
displayForecast(currentCity);

// scroll-to-top button
const scrollToTopButton = document.querySelector(".scroll-to-top");

function handleScrollToTop() {
  const viewportHeight = window.innerHeight;
  if (window.scrollY > viewportHeight / 2) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
}

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", handleScrollToTop);
