const apiKey = '4c86290a336e1fb3a0965fac7e8ec5fa';
const city = 'Durban';
const units = 'metric';

// Base URL for the current weather data
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

// Base URL for the 3-day forecast
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=3&appid=${apiKey}`;

async function getWeatherData() {
  try {
    const currentResponse = await fetch(currentWeatherUrl);
    const currentData = await currentResponse.json();

    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    const currentTemperature = currentData.main.temp;
    const currentWeatherDescription = currentData.weather[0].description;
    const forecast = forecastData.list.map((entry) => ({
      date: new Date(entry.dt * 1000).toLocaleDateString(),
      temp: entry.main.temp,
    }));

    document.getElementById('current-temperature').innerText = `Current temperature in ${city}: ${currentTemperature}°C`;
    document.getElementById('current-conditions').innerText = `Weather description in ${city}: ${currentWeatherDescription.charAt(0).toUpperCase() + currentWeatherDescription.slice(1)}`;

    const ul = document.getElementById('forecast');

    forecast.forEach((day) => {
      const li = document.createElement('li');
      li.innerText = `${day.date}: ${day.temp}°C`;
      ul.appendChild(li);
    });
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

getWeatherData();
