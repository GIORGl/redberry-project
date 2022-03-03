import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PersonalInfo from "./pages/personalInfo/PersonalInfo";
import Home from "./pages/home/Home";
import Technicalskills from "./pages/technical-skills/Technical-skills";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/technical-skills" element={<Technicalskills />} />
        <Route path="/" element={<Home />} />
       
      </Routes>
    </div>
  );
}

export default App;
