import React, { useState, createContext } from "react";

export const context = createContext();

export function ContextProvider(props) {
  const [active, setActive] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNum, setPhoneNum] = useState("");

  const [skillArr, setSkillArr] = useState([]);

  const [workPreferance,setWorkPreferance] = useState("")

  const [hadCovid,setHadCovid] = useState('');

  const [covidDate,setCovidDate] = useState('');

  const [hadVaccine,setHadVaccine] = useState('');

  const [vaccineDate,setVaccineDate] = useState('');
  const [devTalk, setDevTalk] = useState('');
  const [devTopic,setDevTopic] = useState('');

  const [special,setSpecial] = useState('');
  return (
    <context.Provider
      value={{
        active: [active, setActive],
        firstName: [firstName, setFirstName],
        lastName: [lastName, setLastName],
        email: [email, setEmail],
        phone: [phoneNum, setPhoneNum],
        skillArr: [skillArr, setSkillArr],
        workPreferance: [workPreferance,setWorkPreferance],
        hadCovid: [hadCovid,setHadCovid],
        covidDate: [covidDate,setCovidDate],
        hadVaccine: [hadVaccine,setHadVaccine],
        vaccineDate: [vaccineDate,setVaccineDate],
        devTalk: [devTalk, setDevTalk],
        devTopic: [devTopic,setDevTopic],
        special:[special,setSpecial] 
      }}
    >
      {props.children}
    </context.Provider>
  );
}
