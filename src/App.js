import React from "react";
import "./App.css";
import logo from "./assets/nasa_logo.png";
import PictureData from "../src/components/PictureData"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Nasa Photo of the Day</h1>
        <img className="logo" src={logo} alt="NASA Logo"/>
        <PictureData />
      </div>
    </div>
  );
}

export default App;
