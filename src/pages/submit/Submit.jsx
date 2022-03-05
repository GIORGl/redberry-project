import React from "react";
import { Link } from "react-router-dom";
import "./Submit.css";
function Submit() {
  return (
    <div className="submit">
      <div className="btns">
      <button>Submit</button>
      <Link className="btns_link" to={"/"}>go back</Link>
      </div>
    </div>
  );
}

export default Submit;
