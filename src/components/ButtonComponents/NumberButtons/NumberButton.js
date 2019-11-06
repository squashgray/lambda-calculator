import React, {useState} from "react";

const NumberButton = (props) => {
  
  const [homeScore, setHome] = useState(0);
  
  return (
    <button clicked={props.setHome}
    className="number_button">
      {props.numb}
    </button>
  );
};

export default NumberButton;