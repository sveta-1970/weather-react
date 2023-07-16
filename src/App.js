import React from "react";
import "./App.css";
import Search from "./Search";
import Today from "./Today";
import Forecast from "./Forecast";
import Footer from "./Footer";
import background from "./images/background.jpg";

export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="app-outside-body">
        <div className="app-body">
          <Search />
          <Today />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
