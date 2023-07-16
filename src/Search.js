import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="mb-4">
      <div className="row weather-search-form">
        <div className="col-8">
          <input
            type="search"
            className="form-control type-city"
            placeholder="Type a city"
            autoFocus="on"
            autoComplete="off"
          />
        </div>
        <div className="col-2">
          <button className="button-form" type="submit">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </button>
        </div>
        <div className="col-2">
          <button className="button-current" type="submit">
            <i className="fa-solid fa-location-dot search-icon"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
