import React from "react";
import "./Today.css";

export default function Today() {
  let weatherData = {
    city: "Kyiv",
    temperature: 26,
    date: "Sunday 13:00",
    description: "Sun",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidiity: 60,
    wind: 15,
  };
  return (
    <div className="weather">
      <h1>{weatherData.city}</h1>
      <div className="row weather-today">
        <div className="col-3">
          <ul>
            <li>
              Last updated:
              <br /> <span className="day">{weatherData.date}</span>
            </li>
            <li className="weather">{weatherData.description}</li>
          </ul>
        </div>
        <div className="col-6 weather-temperature">
          <img
            className="icon"
            src={weatherData.imgUrl}
            alt={weatherData.description}
          />
          <span className="temperature">{weatherData.temperature}</span>
          <span className="units">°C</span>
        </div>
        <div className="col-3">
          <ul className="city-weather">
            <li>
              Humidity:{" "}
              <span className="humidity">{weatherData.humidiity}</span>%
            </li>
            <li>
              Wind: <span className="wind">{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
