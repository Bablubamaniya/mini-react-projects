// import React from 'react'
import { useState } from "react";
import style from"../style/DateCounter.module.css";

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
function getPrefix(dayCount){
  let prefix="";
  if(dayCount==="0" || dayCount ==="-") prefix ="today is:";
  else if(+dayCount>0) prefix =`${dayCount} days after:`;
  else if(+dayCount<0) prefix = `${dayCount * -1} days before:`;
  return prefix;
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
  const prefix=getPrefix(dayCount);

  

  return (
    <div className={style.container}>
      <div className={style.rangeBox}>
        <input
          type="range"
          min="1"
          max="10"
          defaultValue="1"
          onChange={handleDayStepChange}
        />
        <span>{step}</span>
      </div>
      <div className={style.buttonBox}>
        <button className={style.button} onClick={minusDayCount}>-</button>
        <input className={style.input} type="text" value={dayCount} onChange={handleDayCountChange} />
        <button className={style.button} onClick={plusDayCount}>+</button>
      </div>
      <p className={style.p}>{prefix}{formateDate(currentDate)}</p>
      <button className={style.button} onClick={handleReset}>Reset</button>
    </div>
  );
}

export default DateCounter;
