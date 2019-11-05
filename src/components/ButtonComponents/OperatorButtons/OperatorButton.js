import React from "react";
import Operators from "./Operators";

const OperatorButton = (props) => {
  return (
  
  <button className="operator_button">
      {props.button.value}
    </button>
    
  );
};

export default OperatorButton;
