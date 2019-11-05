import React from "react";

const NumberButton = (props) => {
  return (
    <button className="number_button">
      {props.button}
    </button>
  );
};

export default NumberButton;