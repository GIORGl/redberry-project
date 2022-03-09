import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { context } from "../../Context";
import { nextPage } from "../../untils/nextpage";
import { prevPage } from "../../untils/prevPage";
import "./CovidStuff.css";

function CovidStuff() {
  let navigate = useNavigate();
  const [workPreferance, setWorkPreferance] =
    useContext(context).workPreferance;
  const [hadCovid, setHadCovid] = useContext(context).hadCovid;
  const [covidDate, setCovidDate] = useContext(context).covidDate;
  const [hadVaccine, setHadVaccine] = useContext(context).hadVaccine;
  const [vaccineDate, setVaccineDate] = useContext(context).vaccineDate;

  const [active, setActive] = useContext(context).active;

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  if (
    window.location.href.endsWith("/personalInfo")
  ) {
    setActive(1);
  }

  const validate = () => {
    const errors = {};
    if (!workPreferance) {
      errors.workPreferance = "work preferance is required!";
    }
    if (!hadCovid) {
      errors.hadCovid = "covid info required!";
    }

    if (hadCovid == "true" && !covidDate) {
      errors.covidDate = "covid date required!";
    }
    if (!hadVaccine) {
      errors.hadVaccine = "vaccination info required!";
    }

    if (hadVaccine == "true" && !vaccineDate) {
      errors.vaccineDate = "vaccination date required!";
    }

    return errors;
  };

  useEffect(() => {
    if (isSubmit && Object.keys(formErrors).length == 0) {
      navigate("/insights");
      setActive((prev) => prev + 1);
    }

    setIsSubmit(false);
  }, [formErrors, isSubmit]);
  return (
    <div className="covidStuff">
      <div className="covidStuff_left">
        <h1 className="covidStuff_left_h1">Covid Stuff</h1>

        <div className="work_preferance">
          <p>how would you prefer to work?</p>

          <form
            value={workPreferance}
            onChange={(e) => setWorkPreferance(e.target.value)}
          >
            <input
              type="radio"
              id="office"
              name="work_preerence"
              value="from_office"
            />
            <label for="office">From office</label>
            <input
              type="radio"
              id="home"
              name="work_preerence"
              value="from_home"
            />
            <label for="home">From Home</label>
            <input
              type="radio"
              id="hybrid"
              name="work_preerence"
              value="hybrid"
            />
            <label for="hybrid">Hybrid</label>
          </form>
          <p> {formErrors.workPreferance}</p>
        </div>
        <div className="covid_info">
          <p>Did you contact covid 19? :(</p>

          <form value={hadCovid} onChange={(e) => setHadCovid(e.target.value)}>
            <input name="covid" value={true} id="covid_yes" type="radio" />
            <label htmlFor="covid_yes">Yes</label>

            <input id="covid_no" name="covid" value={false} type="radio" />
            <label htmlFor="">No</label>
          </form>

          <p> {formErrors.hadCovid}</p>
        </div>
        {hadCovid == "true" && (
          <div>
            <div className="covid_date">
              <p>When?</p>
              <input
                value={covidDate}
                onChange={(e) => setCovidDate(e.target.value)}
                type="date"
                name=""
                id=""
              />
            </div>
            <p>{formErrors.covidDate}</p>
          </div>
        )}

        <div className="vaccination_info">
          <p>Have you been vaccinated?</p>
          
          <form
            value={hadVaccine}
            onChange={(e) => {
              setHadVaccine(e.target.value);
            }}
          >
            <input
              name="vaccinated"
              id="vaccinated_yes"
              value={true}
              type="radio"
            />
            <label htmlFor="vaccinated_yes">Yes</label>

            <label htmlFor="vaccinated_no">No</label>
            <input
              name="vaccinated"
              value={false}
              id="vaccinated_no"
              type="radio"
            />
           <p >{formErrors.hadVaccine}</p>
          </form>
        </div>

        {hadVaccine == "true" && (
          <div>
            <div
              value={vaccineDate}
              onChange={(e) => setVaccineDate(e.target.value)}
              className="vaccination_date"
            >
              <p>When did you get your last covid vaccine?</p>

              <input type="date" name="" id="" />
              <p>{formErrors.vaccineDate}</p>
            </div>
          </div>
        )}

        <div className="pagination">
         
         
            <button onClick={(e) => {
              e.preventDefault();
              setActive(active - 1);
              navigate("/technical-skills")
            }} className="previous">^</button>
         
          
          <div className="balls">
            <div id={1} className={`ball ${active == 1 && "active"}`}></div>
            <div id={2} className={`ball ${active == 2 && "active"}`}></div>
            <div id={3} className={`ball ${active == 3 && "active"}`}></div>
            <div id={4} className={`ball ${active == 4 && "active"}`}></div>
            <div id={5} className={`ball ${active == 5 && "active"}`}></div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFormErrors(validate());
              setIsSubmit(true);
            }}
            className="next"
          >
            ^
          </button>
          )
        </div>
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
