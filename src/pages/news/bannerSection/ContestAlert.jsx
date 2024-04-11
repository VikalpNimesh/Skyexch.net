import React from "react";
import "./style.css";

import { questions } from "../../../data/navData";

const ContestAlert = () => {
  return (
    <div className="contest-main">
      <h1>SKYEXCH CONTEST ALERT</h1>
      <p>Predict and win smartphones, smartwatches</p>

      {questions.map((question, i) => (
        <div key={i} className="questions-box">
          <h2>{question}</h2>
          <input type="text" />
        </div>
      ))}
          
          <button className="submit">Submit</button>
    </div>
  );
};

export default ContestAlert;
