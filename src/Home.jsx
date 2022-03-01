import React from "react";
import rocketman from "./images/rocketman.png";
import { Routes, Route, Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <center>
        <div className="box">
          <h1 class="welcome">Welcome Rocketeer!</h1>

          <div className="btn_links">
            <Link to="/personalInfo">
              <button className="start_button">Start questioniere</button>
            </Link>
            <Link to="/lol">all aplications</Link>
          </div>

          <img className="box_image" src={rocketman} alt="rocketman" />
        </div>
      </center>
    </div>
  );
}

export default Home;
