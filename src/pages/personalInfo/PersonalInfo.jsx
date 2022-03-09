import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { context } from "../../Context";
import { prevPage } from "../../untils/prevPage";
import "./PersonalInfo.css";
function PersonalInfo(props) {
  const [firstName, setFirstName] = useContext(context).firstName;
  const [lastName, setLastName] = useContext(context).lastName;
  const [email, setEmail] = useContext(context).email;
  const [phoneNum, setPhoneNum] = useContext(context).phone;
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);
  const [active, setActive] = useContext(context).active;
  let navigate = useNavigate();

  if (
    window.location.href.endsWith("/personalInfo")
  ) {
    setActive(1);
  }

  useEffect(() => {
    if (isSubmit && Object.keys(formErrors).length == 0) {
      console.log("dasdasdasdasd");
      navigate("/technicalskills");
      setActive(prev => prev +1)
    }

    setIsSubmit(false);
  }, [formErrors, isSubmit]);

  const validate = (firstName, lastName, email, phone) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!firstName) {
      errors.firstName = "firstName is required!";
    } else if (firstName < 3) {
      errors.firstName = "firstname needs to be at least 2 chars!";
    }
    if (!lastName) {
      errors.lastName = "lastname is required!";
    } else if (lastName.length < 3) {
      errors.lastName = "firstname needs to be at least 2 chars!";
    }
    if (!email) {
      errors.email = "Email is required!";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }

   

    if (phoneNum && phoneNum.length != 12 && phoneNum.slice(0, 4) != "+995") {
      errors.phone = "Invalid phone number";
    }

    return errors;
  };
  return (
    <div className="personal_info">
      <div className="personal_info_left">
        <h1 className="hey_rocketeer">
          Hey, Rocketeer, what are your coordinates?
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFormErrors(validate(firstName, lastName, email, phoneNum));
            setIsSubmit(true);
           
          }}
        >
          <div className="group_1">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="first_name"
              type="text"
            />
            <p>{formErrors.firstName}</p>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="last_name"
              type="text"
            />
            <p>{formErrors.lastName}</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="e_mail"
              type="text"
            />
            <p>{formErrors.email}</p>
            <input
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              placeholder="+995 5_ _ _ _"
              className="phone_number"
              type="text"
            />
            <p>{formErrors.phone}</p>
          </div>

          <div className="pagination">
          
              <button onClick={() => {
                setActive(active - 1);
                navigate('/')
              }} className="previous">^</button>
         

            {/* </Link> */}
            <div className="balls">
              <div id={1} className={`ball ${active == 1 && "active"}`}></div>
              <div id={2} className={`ball ${active == 2 && "active"}`}></div>
              <div id={3} className={`ball ${active == 3 && "active"}`}></div>
              <div id={4} className={`ball ${active == 4 && "active"}`}></div>
              <div id={5} className={`ball ${active == 5 && "active"}`}></div>
            </div>

            <button type="submit" className="next">
              ^
            </button>
          </div>
        </form>
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
