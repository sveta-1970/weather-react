import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div>{day()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
        size={36}
      />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temp.max)}
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.data.temp.min)}
        </span>
      </div>
    </div>
  );
}
