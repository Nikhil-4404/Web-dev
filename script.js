async function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) return;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3755ff4f0606bef6fa813a4544812ea&units=metric`);
  const data = await response.json();
  const display = document.getElementById('weatherDisplay');
  if (data.cod === 200) {
    display.innerHTML = `
      <h2>${data.main.temp}°C</h2>
      <p>${data.weather[0].description}</p>
      <p>${data.name}, ${data.sys.country}</p>
    `;
  } else {
    display.innerHTML = `<p>City not found.</p>`;
  }
}
