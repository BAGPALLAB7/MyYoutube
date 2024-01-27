import React from "react";
import { BUTTON_LISTS } from "../utils/constaint";
import ButtonComponent from "./ButtonComponent";


const ButtonLists = () => {
  
  
  return (
    <div className=" overflow-auto scroll-p-0 h-14 w-full flex flex-row">
      {BUTTON_LISTS.map((button) => (
        <ButtonComponent button={button} key={button}/>
      ))}
    </div>
  );
};

export default ButtonLists;
