import React, {useState} from "react";
import { specials } from "../../../data.js";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special] = useState(specials);
  return (
    <div className="special_container">
        {special.map((spec, index) => (
           <SpecialButton key={index} spec={spec} />
         ))}
       
    </div>
  );
};

export default Specials;
