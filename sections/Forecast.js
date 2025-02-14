function displayForecast(city) {
  const forecastEndpoint = getForecastEndpoint(city);

  let forecastContainer = document.querySelector(".weather-forecast");
  forecastContainer.innerHTML = "";

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;

      // I. PRELUCRAREA DATELOR:
      let idealForecastStructure = {};

      list.forEach((forecast) => {
        const { dt } = forecast;
        const day = getDayOfTheWeek(dt);

        if (idealForecastStructure[day] !== undefined) {
          idealForecastStructure[day].push(forecast);
        } else {
          idealForecastStructure[day] = [forecast];
        }
      });
      console.log(idealForecastStructure);

      // II. PARCURGEREA si AFISAREA pe ecran a datelor:

      for (const day in idealForecastStructure) {
        forecastContainer.innerHTML += `<h2>${day}</h2>`;

        let forecastList = idealForecastStructure[day];
        forecastList.forEach((forecast) => {
          const { dt, main, weather } = forecast;
          const hours = getHour(dt);
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          const weatherDescription = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          forecastContainer.innerHTML += `
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border border-secondary rounded-pill p-3 mb-3">
              <div>${hours}</div> 
              <div><img src="${weatherIcon}" alt="weather-icon-img"></div>
              <div class="fs-3 text-secondary"><strong>${temperature}°C</strong></div>
              <div><p>${weatherDescription}</p></div>
              <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
            </div>
          `;
        });
      }
    });
}
