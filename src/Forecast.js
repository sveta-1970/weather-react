import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row weather-forecast">
      <div className="col">
        <p className="weather-forecast-date"></p>
        <p className="weather-forecast-icon">
          <img src="" alt="" />
        </p>
        <p className="weather-forecast-temperature">
          <span className="weather-forecast-temperature-max"></span>
          <span className="weather-forecast-temperature-min"></span>
        </p>
      </div>
    </div>
  );
}
