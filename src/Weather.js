import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { ThreeDots } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "52b789a53d83895c9bd9e318a67b4fa8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city entered in input form
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function searchLocation(position) {
    console.log(position);
    let apiKey = "52b789a53d83895c9bd9e318a67b4fa8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <button className="button-form" type="submit">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </button>
            </div>
            <div className="col-2">
              <button
                className="button-current"
                type="submit"
                onClick={getCurrentPosition}
              >
                <i className="fa-solid fa-location-dot search-icon"></i>
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coord} />
      </div>
    );
  } else {
    search(); //ищем defaultCity

    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="rgb(252, 225, 104)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}

/*
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
*/
