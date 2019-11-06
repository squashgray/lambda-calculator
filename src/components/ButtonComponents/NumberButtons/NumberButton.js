import React, {useState} from "react";

const NumberButton = (props) => {
  
  
  
  return (
    <button onClick={() => props.setNumDisplay(props.numb)} className="number_button">
      {props.numb}
    </button>
  );
};

export default NumberButton;