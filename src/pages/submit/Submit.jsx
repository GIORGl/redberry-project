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
  const [arr,setArr] = useState([])


  useEffect(() => {
    const getSkills = async () => {
      let response = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
      let data = await response.json();
      console.log(data);
      setSkills(data);

    //  setArr(skillArr.map((skill) => {
    //   return {
    //     id: skills.filter((el) => el.title == skill.skill)[0][id],
    //     experience: parseInt(skill.experience),
    //   };
    // }))
    };

    getSkills();
    console.log();

    console.log(
      skillArr.map((skill) => {
        return {
          id: skills.filter((el) => el.title == skill.skill)[0].id,
          experience: parseInt(skill.experience),
        };
      })
    );
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
  useEffect(() => {
    console.log(
      firstName,
      lastName,
      email,
      phone,
      skillArr,
      "work pre",
      workPreferance,
      turnBool(hadCovid),
      turnBool(hadVaccine),
      covidDate,
      vaccineDate,
      turnBool(devTalk),
      devTopic
    );
  });
  const handleSubmit = async () => {
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
      // {
      //     "token": "c39ba41a-16da-4e94-8d0d-a1db9d64eb40",
      //     "first_name": firstName,
      //     "last_name:" :lastName,
      //     "email": email,
      //     "phone": "+995591933382",
      //     "skills": [
      //           {
      //             "id": 1,
      //             "experience": 3
      //           }
      //         ],
      //     "work_preference": turnBool(workPreferance),
      //     "had_covid": turnBool(hadCovid),
      //     "had_covid_at": covidDate,
      //     "vaccinated": turnBool(hadVaccine),
      //     "vaccinated_at": vaccineDate,
      //     "will_organize_devtalk": turnBool(devTalk),
      //     "devtalk_topic": devTopic,
      //      "something_special": special,
      //   }
      {
        token: "c39ba41a-16da-4e94-8d0d-a1db9d64eb40",
        first_name: firstName,
        last_name: lastName,
        email: email,

        isPhone,

        skills: [
          {id:1,experience:1}
        ],

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

    // const requestOptions = {

    //   method: "POST",

    //   headers: {
    //     'Content-Type': 'application/json',

    //   },

    //   body: JSON.stringify({
    //     token: "c39ba41a-16da-4e94-8d0d-a1db9d64eb40",
    //     first_name: firstName,
    //     last_name: lastName,
    //     email: email,
    //     phone: phone,
    //     skills: skillArr,
    //     work_preference: turnBool(workPreferance),
    //     had_covid: turnBool(hadCovid),
    //     had_covid_at: covidDate,
    //     vaccinated: turnBool(hadVaccine),
    //     vaccinated_at: vaccineDate,
    //     will_organize_devtalk: turnBool(devTalk),
    //     devtalk_topic: devTopic,
    //     something_special: special,
    //   }),
    // };
    // const response = await fetch(
    //   "https://cors-anywhere.herokuapp.com/https://bootcamp-2022.devtest.ge/api/application",
    //   requestOptions
    // );
    // const data = await response;
    // console.log(response)
    // console.log(data);
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
