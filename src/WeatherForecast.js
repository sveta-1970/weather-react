import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    return (
      <div className="WeatherForecast">
        <div>Sat</div>
        <WeatherIcon code="01d" alt="" size={36} />
        <div className="WeatherForecast-temperature">
          <span className="WeatherForecast-temperature-max">19</span>
          <span className="WeatherForecast-temperature-min">10</span>
        </div>
      </div>
    );
}
