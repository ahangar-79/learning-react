import React from "react";
import ReactDOM from "react-dom/client";
import "./index";

import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  //   const step = 1;

  function handlePrevies() {
    if (step > 1) setStep(step - 1);
    // alert("previes");
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
    // alert("next");
  }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>

        <p className="message">
          step {step} : {messages[step - 1]}
        </p>
        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlePrevies}
          >
            previes
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleNext}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}