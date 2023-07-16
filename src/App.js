import React from "react";
import "./App.css";

function App() {
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

export default App;
