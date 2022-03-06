import React from "react";
import Pagination from "../../components/Pagination";
import "./CovidStuff.css";

function CovidStuff() {
  return (
    <div className="covidStuff">
      <div className="covidStuff_left">
        <h1 className="covidStuff_left_h1">Covid Stuff</h1>

        <div className="work_preferance">
          <p>how would you prefer to work?</p>

          <form>
            <input
              type="radio"
              id="office"
              name="work_preerence"
              value="From Sairme Office"
            />
            <label for="office">From office</label>
            <input
              type="radio"
              id="home"
              name="work_preerence"
              value="From Home"
            />
            <label for="home">From Home</label>
            <input
              type="radio"
              id="hybrid"
              name="work_preerence"
              value="Hybrid"
            />
            <label for="hybrid">Hybrid</label>
          </form>
        </div>
        <div className="covid_info">
          <p>Did you contact covid 19? :(</p>

          <form action="">
            <input name="covid" value={"Yes"} id="covid_yes" type="radio" />
            <label htmlFor="covid_yes">Yes</label>

            <input id="covid_no" name="covid" value="No" type="radio" />
            <label htmlFor="">No</label>
          </form>
        </div>
        <div className="covid_date">
          <p>When?</p>
          <input type="date" name="" id="" />
        </div>

        <div className="vaccination_info">
          <p>Have you been vaccinated?</p>
          <form>
            <input
              name="vaccinated"
              id="vaccinated_yes"
              value={"Yes"}
              type="radio"
            />
            <label htmlFor="vaccinated_yes">Yes</label>

            <label htmlFor="vaccinated_no">No</label>
            <input
              name="vaccinated"
              value="No"
              id="vaccinated_no"
              type="radio"
            />
          </form>
        </div>

        <div className="vaccination_date">
          <p>When did you get your last covid vaccine?</p>

          <input type="date" name="" id="" />
        </div>


        <Pagination url={window.location.href.replace("http://localhost:3000","")} />
      </div>
      <div className="covidStuff_right">
        <h1 className="covid_h1">Redberry Covid Policies</h1>

        <p className="covid_p">
          We were soo much fun before the pandemic started! Parties almost every
          weekend and lavish employee birthday celebrations! Unfortunately,
          covid ruined that fun like it did almost everything else in the world.
          But we try our best to zhuzh it up a bit. For example, we host
          biweekly Devtalks where our senior and lead developers talk about
          topics they are passionate about. Previous topics have included Web3,
          NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
          you can join our Zoom broadcast as well. Feel free to join either as
          an attendee or a speaker!
        </p>
      </div>
    </div>
  );
}

export default CovidStuff;
