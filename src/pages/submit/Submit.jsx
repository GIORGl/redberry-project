import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../../Context";
import "./Submit.css";
function Submit() {
  const [firstName, setFirstName] = useContext(context).firstName;
  const [lastName, setLastName] = useContext(context).lastName;
  const [email, setEmail] = useContext(context).email;
  const [phone, setPhone] = useContext(context).phone;
  const [skillArr, setSkillArr] = useContext(context).skillArr;
  const [workPreferance, setWorkPreferance] =
    useContext(context).workPreferance;
  const [hadCovid, setHadCovid] = useContext(context).hadCovid;

  const [covidDate, setCovidDate] = useContext(context).covidDate;

  const [hadVaccine, setHadVaccine] = useContext(context).hadVaccine;
  const [vaccineDate, setVaccineDate] = useContext(context).vaccineDate;
  const [devTalk, setDevTalk] = useContext(context).devTalk;
  const [devTopic, setDevTopic] = useContext(context).devTopic;
  const [special, setSpecial] = useContext(context).special;
  const [skills, setSkills] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      let response = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
      let data = await response.json();
      console.log(data);
      setSkills(data);

      let newArr = skillArr.map((skill) => {
        return {
          id: skills.filter((el) => el.title == skill.skill)[0].id,
          experience: parseInt(skill.experience),
        };
      });

      setArr(newArr);
     
    };

    getSkills();
  }, []);

  function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "/" + day + "/" + year;
  }

  const turnBool = (el) => {
    if (el == "true") {
      return true;
    } else if (el == "false") {
      return false;
    }

    return null;
  };

  if (!phone) {
    setPhone("");
  }
  if (!vaccineDate) {
    setVaccineDate(getFormattedDate(new Date()));
  }

  if (!covidDate) {
    setCovidDate(getFormattedDate(new Date()));
  }

  if (!devTopic) {
    setDevTopic("");
  }

  const handleSubmit = async () => {
    console.log("arr", arr);
    let isPhone = () => {
      if (phone) {
        return { phone: phone };
      } else {
        return null;
      }
    };

    let isDevTopic = () => {
      if (devTopic) {
        return { devtalk_topic: devTopic };
      } else {
        return null;
      }
    };

    let postData =
 
      {
        token: "c39ba41a-16da-4e94-8d0d-a1db9d64eb40",
        first_name: firstName,
        last_name: lastName,
        email: email,

        isPhone,

        skills: arr,

        work_preference: workPreferance,
        had_covid: turnBool(hadCovid),
        had_covid_at: covidDate,
        vaccinated: turnBool(hadVaccine),
        vaccinated_at: vaccineDate,
        will_organize_devtalk: turnBool(devTalk),
        isDevTopic,
        something_special: special,
      };

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post(
        "https://bootcamp-2022.devtest.ge/api/application",
        postData,
        axiosConfig
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

  };
  return (
    <div className="submit">
      <div className="btns">
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <Link className="btns_link" to={"/"}>
          go back
        </Link>
      </div>
    </div>
  );
}

export default Submit;
