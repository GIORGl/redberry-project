import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../Context";
import { nextPage } from "../untils/nextpage";
import { prevPage } from "../untils/prevPage";
import "./Pagination.css";

function Pagination({ url, validate, history }) {
  const [firstName, setFirstName] = useContext(context).firstName;

  const [lastName, setLastName] = useContext(context).lastName;
  const [email, setEmail] = useContext(context).email;
  const [phoneNum, setPhoneNum] = useContext(context).phone;
  const [active, setActive] = useContext(context).active;

  if (
    window.location.href.replace("http://localhost:3000", "") == "/personalInfo"
  ) {
    setActive(1);
  }

  return (
    <div className="pagination">
      {/* <Link to={prevPage(url)}> */}
      <Link
        onClick={() => {
          setActive(active - 1);
        }}
        to={prevPage(url)}
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
      <Link
        onClick={(e) => {
          e.preventDefault();
          // validate(firstName, lastName, email, phoneNum);
          // setFormErrors(validate(firstName, lastName, email, phoneNum));
          // console.log("len", Object.keys(formErrors).length);
          // console.log(formErrors)
          setActive(active + 1);
          // console.log(url)
        }}
        to={nextPage(window.location.href.replace("http://localhost:3000", ""))}
      >
        <button className="next">^</button>
      </Link>
      )
    </div>
  );
}

export default Pagination;
