document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "d1db8052c649a2b2256810c33ad1ee3a";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds1.jpg";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.jpg";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        }
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });

    // Call checkWeather with a default city (e.g., "Denver") on page load
    checkWeather("Denver");
});