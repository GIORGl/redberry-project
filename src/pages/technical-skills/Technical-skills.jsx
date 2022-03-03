import React, { useEffect, useRef, useState } from "react";
import Pagination from "../../components/Pagination";
import "./Technical-skills.css";

function Technicalskills() {
  const [selectValue, setSelectValue] = useState(null);
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");
 const [current,setCurrent] = useState(null)
  const [skillArr, setSkillArr] = useState([]);
  useEffect(() => {
    const getSkills = async () => {
      let response = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
      let data = await response.json();
      setSkills(data);
    };

    getSkills();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skillArr.some((e) => e.skill === selectValue)) {
      setSkillArr([...skillArr, { skill: selectValue, exp: inputValue }]);
    } else {
      throw new Error("that skill alredy exists");
    }

    console.log(skillArr);
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
        </form>

        <div className="display">
          {skillArr.map(el =>  (
            <div className="item">   
              <p>{el.skill}</p>
              <p>Years of Experience:{el.exp}</p>
              <button type="button" onClick={() => handleClick(el)} className="delete">
                <span>-</span>
              </button>
            </div>
          ))}
        </div>

        <Pagination />
      </div>

      <div className="technicalskills_right"></div>
    </div>
  );
}

export default Technicalskills;
