import React, { useEffect, useState } from "react";
import "./Application.css";

function Application({ application }) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getSkills = async () => {
      let response = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
      let data = await response.json();
      setSkills(data);

      console.log(skills);
    };

    getSkills();
  }, []);

  const getTitle = (id) => {
    skills.forEach((el) => {
      if (el.id == id) {
        return el.title
      }
    });
  };

  return (
    <div className="application">
      <div className="application_left">
        <div className="info">
          <p className="Personal_Information">Personal Information</p>

          <div className="div">
            <p>First name</p>
            <p className="div_value">{application.first_name}</p>
          </div>
          <div className="div">
            <p className="div_value">Last Name</p>

            <p className="div_value">{application.last_name}</p>
          </div>
          <div className="div">
            <p>Email</p>
            <p className="div_value">{application.email}</p>
          </div>
          <div className="div">
            <p>Phone</p>
            <p className="div_value">{application.phone}</p>
          </div>
        </div>

        <div className="covid_situation">
          <p>Covid situation</p>

          <form>
            <div>
              <input
                type="radio"
                id="office"
                name="work_preerence"
                value="From Sairme Office"
                checked={
                  application.work_preference == "From Sairme Office"
                    ? false
                    : true
                }
              />
              <label for="office">From office</label>
            </div>
            <div>
              <input
                type="radio"
                id="home"
                name="work_preerence"
                value="From Home"
                checked={
                  application.work_preference == "From Home" ? false : true
                }
              />
              <label for="home">From Home</label>
            </div>
            <div>
              <input
                type="radio"
                id="hybrid"
                name="work_preerence"
                value="Hybrid"
                checked={application.work_preference == "Hybrid" ? false : true}
              />
              <label for="hybrid">Hybrid</label>
            </div>
          </form>
        </div>

        <div className="covid">
          <p>Did you have covid 19?</p>
          <form action="">
            <input
              type="radio"
              id="yes"
              name="covid"
              value={false}
              checked={application.work_preference == true ? false : true}
            />
            <label for="yes">Yes</label>
            <input
              type="radio"
              id="false"
              name="covid"
              value={true}
              checked={application.had_covid == false ? false : true}
            />
            <label for="false">No</label>
          </form>
        </div>
        <div>
          <p>When?</p>
          <div>
            <input type="date" value={application.had_covid_at} />
          </div>
        </div>
        <div className="vaccine_information">
          <form action="">
            <p>have you been vaccinated?</p>
            <input
              type="radio"
              id="vaccine_true"
              name="vaccine"
              value={false}
              checked={application.vaccinated == true ? false : true}
            />
            <label for="vaccine_true">Yes</label>

            <input
              type="radio"
              id="vaccine_false"
              name="vaccine"
              value={true}
              checked={application.vaccinated == false ? false : true}
            />
            <label for="vaccine_false">No</label>
          </form>
        </div>
        <div className="vaccine_date">
          <p>when?</p>
          <input type="date" value={application.had_covid_at} />
        </div>
      </div>
      <div className="application_right">
        <div>
          <p>skillset</p>
          {application.skills.map((skill) => (
            <div>
              <div className="app_item">
            
                <p>{skill.id}</p>
                <p>Years of Experience:{skill.experience}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p>Insights</p>

          <p>Would you attend Devtalks and maybe also organize your own?</p>

          <form action="">
            <input
              type="radio"
              id="dev_true"
              name="vaccine"
              value={true}
              checked={application.will_organize_devtalk == true ? false : true}
            />
            <label for="dev_true">Yes</label>

            <input
              type="radio"
              id="dev_false"
              name="vaccine"
              value={true}
              checked={
                application.will_organize_devtalk == false ? false : true
              }
            />
            <label for="dev_false">No</label>
          </form>
        </div>

        <div>
          <p>What would you speak about at Devtalk?</p>

          <textarea className="textarea_1" name="" id="" cols="30" rows="10">
            {application.devtalk_topic}
          </textarea>
        </div>

        <div>
          <p>Tell us somthing special</p>
          <textarea className="textarea_2" name="" id="" cols="30" rows="10">
            {application.something_special}
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default Application;
