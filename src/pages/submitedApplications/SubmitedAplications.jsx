import React, { useEffect, useState } from "react";
import Application from "./Application/Application";
import "./SubmitedAplications.css";
import { v4 as uuidv4 } from "uuid";
function SubmitedAplications() {
  const [applications, setApplications] = useState([]);
  const [dropDown, setDropDown] = useState("");
  const [application, setApplication] = useState({});
  const [toggle, setToggle] = useState(false);
  

  useEffect(() => {
    const getApplications = async () => {
      let response = await fetch(
        "https://bootcamp-2022.devtest.ge/api/applications?token=c39ba41a-16da-4e94-8d0d-a1db9d64eb40"
      );
      let data = await response.json();

      setApplications(
        data.map((el) => {
          return { ...el, id: uuidv4() };
        })
      );

      // setApplications(applications.map(app => {
      //   return {...app,id: uuidv4()}
      // }))
      console.log(applications);
    };

    getApplications();
  }, [applications]);

  
  

 

  return (
    <div className="submitedApplications">
      <h1 className="submitedApplications_h1">Submitted Applications</h1>
      <div className="all_the_apps">
        {applications.map((application) => (
          <div className="apps">
            <div
              onClick={() => {
                setToggle((prev) => !prev);
                setApplication(application);
                setDropDown(application.id);

              

                console.log(application);
              }}
              className="dropDown"
            ></div>

            {dropDown == application.id && toggle && (
              <Application application={application} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubmitedAplications;
