// import React from 'react'
import { useState } from "react";
import styles from "../style/AccordionV2.module.css";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

function AcordianV2(props) {
  const { contents } = props;
  const [open, setOpen] = useState(new Array(contents.length).fill(false));
  
  function handleClick(index) {
    setOpen(function (currState) {
      currState[index] = !currState[index];
      return [...currState];
    });
    
  }

  return (
    <div className={styles.container}>
      {contents.map(function (contents, index) {
        return (
          <Row
            title={contents.title}
            details={contents.details}
            key={index}
            handleClick={handleClick}
            index={index}
            isOpen={open[index]}

          />
        );
      })}
    </div>
  );
  function Row(props) {
    const { title, details, handleClick, index, isOpen } = props;
    return (
      <div className={styles.row}>
        <h3 onClick={() => handleClick(index)} className={styles.title}>
          <span>
            {title} {isOpen ? <HiMiniMinus /> : <HiMiniPlus />}
            {/* <HiMiniPlus /> */}
          </span>
        </h3>

        {isOpen && <p className={styles.details}>{details} </p>}
      </div>
    );
  }
}

export default AcordianV2;
