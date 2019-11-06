import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="special_button">
      {props.spec}
    </button>
  );
};

export default SpecialButton;
