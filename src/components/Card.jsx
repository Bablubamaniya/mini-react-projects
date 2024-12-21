import { useState } from "react";
    const messages = [
  "😎 Learn HTML",
  "🐳 Learn CSS",
  "💪 JavaScript",
  "🤑 Learn React",
];

const cardStyle={
    display:"flex",
    gap:"2rem",
    flexDirection:"column",
    backgroundColor :"#eeeee4",
    padding:"2rem",
    // height:"fit-content",
    border:"1px solid black",
    width:"400px",
    // height:"300px",
    borderRadius:"10px",


    
};

const active  = {
    backgroundColor:"#ae3ec9",
    color :"white"
}

const numStyle ={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:"3rem",
    width:"3rem",
    borderRadius:"100%",
    
    // padding:"0.5rem"
    
}
const cardContainer ={
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    gap:"1rem"
}
const messegeStyle ={
    textAlign:"center",
    fontSize:"1rem"
}

const btnStyle ={
backgroundColor:"#ae3ec9",
padding:"0.5rem",
borderRadius:"5px",
border:"none",
fontSize:"1rem",
} 
const btnContainer ={
display:"flex",
justifyContent:"space-between",
}


function Card(){
    const [step,setStep] =useState(1);

    function previusStep(){
        if(step===1) return;
            setStep (step-1);
        
    
    }
    function nextStep(){
        if(step===messages.length)return;
            setStep (step+1);
        
    }
    return (
        <div style={cardStyle}>
            <ul style={cardContainer}>
                <div style={ step>=1 ? {...numStyle, ...active} :numStyle}>
             <span>1</span>
             </div>
             <div style={ step>=2 ? {...numStyle, ...active} :numStyle}>
              <span>2</span>
              </div>
              <div style={ step>=3 ? {...numStyle, ...active} :numStyle}>
              <span>3 </span>
              </div>
              <div style={ step>=4 ? {...numStyle, ...active} :numStyle}>
                <span>4</span>
                </div>
            </ul>
            <p style={messegeStyle}>{messages[step-1] }</p>
      
        <div>
            <div style={btnContainer}>
<button onClick={previusStep} style={btnStyle}>Previous</button>
<button onClick={nextStep} style={btnStyle}>Next</button>
</div>
        </div>
        </div>
    )
}
export default Card