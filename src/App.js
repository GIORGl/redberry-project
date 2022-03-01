import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import Home from "./Home";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
