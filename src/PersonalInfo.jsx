import React from "react";
import "./PersonalInfo.css";

function PersonalInfo() {
  return (
    <div className="personal_info">
      <div className="personal_info_left">
        <h1>Hey, Rocketeer, what are your coordinates?</h1>

        <center>
        <div className="input_box">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        </center>
      </div>
      <div className="personal_info_right">
        <center>
          {" "}
          <h1>Redberry Origins</h1>
        </center>
        <center>
          <p>
            You watch “What? Where? When?” Yeah. Our founders used to play it.
            That’s where they got a question about a famous American author and
            screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
            exact name and he answered Ray Redberry. And at that moment, a name
            for a yet to be born company was inspired - Redberry 😇
          </p>
        </center>
      </div>
    </div>
  );
}

export default PersonalInfo;
