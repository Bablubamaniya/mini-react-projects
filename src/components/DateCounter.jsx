// import React from 'react'
import { useState } from "react";
import "../style/dateCounter.css";

const today=new Date();

function formateDate(date){
    return date.toLocaleDateString("en-IN",{
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

}
function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;

}

function isNumber(str) {
  return !isNaN(Number(str));
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [dayCount, setDayCount] = useState("0");
 

  function handleDayCountChange(e) {
    const value = e.target.value;
    // console.log(isNumber(value));
    if (isNumber(value) || value === "-") setDayCount(value);
    // setDayCount(Number(e.target.value));
  }
  function handleDayStepChange(e) {
    setStep(Number(e.target.value));
  }
  function plusDayCount() {
    if(isNumber(dayCount))
    setDayCount((dayCount) => `${Number(dayCount) + step}`);
  }
  function minusDayCount() {
    setDayCount((dayCount) => `${Number(dayCount) - step}`);
  }
  function handleReset(){
    setStep(1);
    setDayCount(0)
  }

  //dirive state
  const currentDate =addDays(today,Number(dayCount==="-"?0:dayCount));
  

  return (
    <div className="container">
      <div className="rangeBox">
        <input
          type="range"
          min="1"
          max="10"
          defaultValue="1"
          onChange={handleDayStepChange}
        />
        <span>{step}</span>
      </div>
      <div className="buttonBox">
        <button onClick={minusDayCount}>-</button>
        <input type="text" value={dayCount} onChange={handleDayCountChange} />
        <button onClick={plusDayCount}>+</button>
      </div>
      <p>{formateDate(currentDate)}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default DateCounter;
