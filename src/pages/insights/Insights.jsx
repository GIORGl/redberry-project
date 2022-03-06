import React from "react";
import Pagination from "../../components/Pagination";
import "./Insights.css";

function Insights() {
  return (
    <div className="insights">
      <div className="insights_left">
        <h1 className="insights_left_h1">What about you?</h1>

        <div className="devtalk_if">
          <p>Would you attend Devtalks and maybe also organize your own?</p>

          <form>
            <div className="">
              <input name="dev" id="dev_yes" value={"Yes"} type="radio" />
              <label htmlFor="dev_yes">Yes</label>
            </div>
            <div className="">
              <input name="dev" value="No" id="dev_no" type="radio" />
              <label htmlFor="dev_no">No</label>
            </div>
          </form>
        </div>

        <p className="devtalk_p">What would you speak about at Devtalk?</p>

        <textarea
          className="devtalk_text"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <p className="special_p">Tell us something special</p>

        <textarea
          className="special_text"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <Pagination url={window.location.href.replace("http://localhost:3000","")} />
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
