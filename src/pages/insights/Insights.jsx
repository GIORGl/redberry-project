import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { context } from "../../Context";
import { prevPage } from "../../untils/prevPage";
import "./Insights.css";

function Insights() {
  let navigate = useNavigate();
  const [devTalk, setDevTalk] = useContext(context).devTalk;
  const [devTopic, setDevTopic] = useContext(context).devTopic;
  const [special, setSpecial] = useContext(context).special;

  const [active, setActive] = useContext(context).active;

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  if (
    window.location.href.replace("http://localhost:3000", "") == "/personalInfo"
  ) {
    setActive(1);
  }

  const validate = () => {
    let errors = {};
    if (!devTalk) {
      errors.devTalk = "required!";
    }
    if (devTalk == 'true' && !devTopic) {
      errors.devTopic = "required!";
    }

    if (!special) {
      errors.special = "required!";
    }

    return errors;
  };

  useEffect(() => {
    if (isSubmit && Object.keys(formErrors).length == 0) {
      navigate("/submit");
      setActive((prev) => prev + 1);
    }

    setIsSubmit(false);
  }, [formErrors, isSubmit]);
  return (
    <div className="insights">
      <div className="insights_left">
        <h1 className="insights_left_h1">What about you?</h1>

        <div className="devtalk_if">
          <p>Would you attend Devtalks and maybe also organize your own?</p>

          <form value={devTalk} onChange={(e) => setDevTalk(e.target.value)}>
            <div className="">
              <input name="dev" id="dev_yes" value={true} type="radio" />
              <label htmlFor="dev_yes">Yes</label>
            </div>
            <div className="">
              <input name="dev" value="false" id="dev_no" type="radio" />
              <label htmlFor="dev_no">No</label>
            </div>

            <p>{formErrors.devTalk}</p>
          </form>
        </div>

        {devTalk == "true" && (
          <div>
            <p className="devtalk_p">What would you speak about at Devtalk?</p>

            <textarea
              value={devTopic}
              onChange={(e) => setDevTopic(e.target.value)}
              className="devtalk_text"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        )}
        <p className="devTopic_err">{formErrors.devTopic}</p>
        <div>
          <p className="special_p">Tell us something special</p>

          <textarea
            value={special}
            onChange={(e) => setSpecial(e.target.value)}
            className="special_text"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <p className="special">{formErrors.special}</p>
        <div className="pagination">
          {/* <Link to={prevPage(url)}> */}
          <Link
            onClick={() => {
              setActive(active - 1);
            }}
            to={prevPage(
              window.location.href.replace("http://localhost:3000", "")
            )}
          >
            <button className="previous">^</button>
          </Link>
          {/* </Link> */}
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

      <div className="insghts_right">
        <h1>Redberrian Insights</h1>

        <p>
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

export default Insights;
