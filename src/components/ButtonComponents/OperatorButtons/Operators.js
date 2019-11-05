import React, {useState} from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";


//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator] = useState(operators);
  return (
    <div>
        {operator.map((button, index) => (
           <OperatorButton key={index} button={button} />
         ))}
    </div>
  );
};

export default Operators;