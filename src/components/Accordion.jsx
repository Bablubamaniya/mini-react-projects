// import React from 'react'
import { useState } from "react";
import "../style/Accordion.module.css"

function Acordian(props) {
  const {contents,color} =props;
  const [open,setOpen] = useState(false);
  return (
    <div>
      {contents.map(function(contents,index){
        return (
          <Row 
          title={contents.title}
          details={contents.details}
          key={index}
          />
        );
      })}
      </div>
  );
  function Row(props){
    const {title,details}=props;
    return (
      <div>
      <h3>{title}</h3>
      <p>{details}</p>
      </div>
    );
  }

}


export default Acordian;