import React from "react";
import rocketman from "../../images/rocketman.png";
import { Routes, Route, Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 class="welcome">Welcome Rocketeer!</h1>

      <div className="links">
        <Link to="/personalInfo">
          <button className="start_button">
            <p>Start questioniere</p>
          </button>
        </Link>
        <Link className="submitedAplications" to="/lol">
          Submited Applications
        </Link>
        
      </div>

      <img className="home_image" src={rocketman} alt="rocketman" />
    </div>
  );
}

export default Home;
