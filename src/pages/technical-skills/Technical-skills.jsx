import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { context } from "../../Context";
import { nextPage } from "../../untils/nextpage";
import { prevPage } from "../../untils/prevPage";
import "./Technical-skills.css";

function Technicalskills() {
  let navigate = useNavigate();
  const [selectValue, setSelectValue] = useState(null);
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [skillArr, setSkillArr] = useContext(context).skillArr;
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [active, setActive] = useContext(context).active;

  if (
    window.location.href.replace("http://localhost:3000", "") == "/personalInfo"
  ) {
    setActive(1);
  }

  useEffect(() => {
    const getSkills = async () => {
      let response = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
      let data = await response.json();
      setSkills(data);
    };

    getSkills();
  }, []);

  useEffect(() => {
    if (isSubmit && Object.keys(formErrors).length == 0) {
      
      navigate("/covidStuff");
      setActive(prev => prev +1)
      
    }

    setIsSubmit(false);
  }, [formErrors, isSubmit,skillArr]);

  const validate = () => {
    const errors = {};
    if (skillArr.some((e) => e.skill == selectValue)) {
      errors.duplicate = "that skill alredy exists";
    }

    if (skillArr.length == 0) {
      errors.content = "gotta have at least 1 skill";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skillArr.some((e) => e.skill === selectValue)) {
      setSkillArr([...skillArr, { skill: selectValue, experience: inputValue }]);
    }

    setSelectValue(null)

    
  };

  const handleClick = (obj) => {
    console.log("clicked");
    console.log(obj);

    setSkillArr(skillArr.filter((element) => element.skill != obj.skill));
  };
  return (
    <div className="techinicalskills">
      <div className="technicalskills_left">
        <h1 className="skills_h1">Tell us about your skills</h1>

        <form className="left_form" onSubmit={handleSubmit}>
          <select
            onChange={(e) => setSelectValue(e.target.value)}
            value={selectValue}
            name="skills"
            className="skills"
          >
            <option id="placeholder" value="" disabled selected hidden>
              Skills
            </option>

            {skills.map((skill) => (
              <option value={skill.title} id={skill.id}>
                {skill.title}
              </option>
            ))}
          </select>

          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="skills_time"
            type="number"
            placeholder="Experience Duration in Years"
          />
          <p>{formErrors.duplicate}</p>
          <p>{formErrors.content}</p>
        </form>

        <div className="display">
          {skillArr.map((el) => (
            <div className="item">
              <p>{el.skill}</p>
              <p>Years of Experience:{el.experience}</p>
              <button
                type="button"
                onClick={() => handleClick(el)}
                className="delete"
              >
                <span>-</span>
              </button>
            </div>
          ))}
        </div>

        {/* <Pagination
          url={window.location.href.replace("http://localhost:3000", "")}
        /> */}

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

      <div className="technicalskills_right">
        <h1 className="skills_right_h1">A bit about our battles</h1>

        <p className="skills_right_p">
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </p>
      </div>
    </div>
  );
}

export default Technicalskills;
