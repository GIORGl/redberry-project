import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PersonalInfo from "./pages/personalInfo/PersonalInfo";
import Home from "./pages/home/Home";
import Technicalskills from "./pages/technical-skills/Technical-skills";
import CovidStuff from "./pages/covidStuff/CovidStuff";
import Insights from "./pages/insights/Insights";
import Submit from "./pages/submit/Submit";
import Thanks from "./pages/thanks/Thanks";
import SubmitedAplications from "./pages/submitedApplications/SubmitedAplications";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/personalInfo" element={<PersonalInfo />} />

        <Route path="/covidStuff" element={<CovidStuff />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/submitedApplications" element={<SubmitedAplications />} />
        <Route path="/technicalskills" element={<Technicalskills />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
