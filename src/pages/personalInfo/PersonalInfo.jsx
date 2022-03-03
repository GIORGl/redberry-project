import React from "react";
import "./PersonalInfo.css";

function PersonalInfo() {
  return (
    <div className="personal_info">
      <div className="personal_info_left">
        <h1 className="hey_rocketeer">
          Hey, Rocketeer, what are your coordinates?
        </h1>
        <div className="group_1">
          <input placeholder="First Name" className="first_name" type="text" />
          <input placeholder="Last Name" className="last_name" type="text" />

          <input placeholder="E-mail" className="e_mail" type="text" />

          <input
            placeholder="+995 5_ _ _ _"
            className="phone_number"
            type="text"
          />
        </div>
      </div>
      <div className="personal_info_right">
        <h1 className="redberry_origins">Redberry Origins</h1>
        <p className="desc">
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;
