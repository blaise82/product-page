import React from "react";
import svg1 from "./svg1.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="left">
          <div className="logo">
            <span className="I">I</span>tegure
          </div>
        </div>
        <div className="right">
          <div className="buttons">
            <button class="btn">signup</button>
            <button class="btn1">sign in</button>
          </div>
        </div>
      </header>

      <div>
        <div className="half">
        <div class="squircle"></div>
          <div className="left">
            <div className="detail-wrap">
              <p className="head"><span className="color1">*</span>801<span className="color2">*</span>123<span className="color3">#</span></p>
              <p className="subHead">Welcome to Itegure || Leaning Reminder</p>
              <p className="detail">
                We send information on schedules of courses that your children
                will be learning on Radio and TV on time in this covid-19
                period.
              </p>
            </div>
          </div>
        </div>
        <div className="half center">
          <div className="right">
            <img src={svg1} className="svg1" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
