import StudentCard from "./StudentCard";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Student Information</h1>

      <div className="student-container">
        <StudentCard name="HARSH " course="CSE" marks={97}/>
        <StudentCard name="HARSHIT" course="CSE-AI/ML" marks={90}/>
        <StudentCard name="HARSHI" course="CSE-DS" marks={94}/>
      </div>
    </div>
  );
}

export default App;