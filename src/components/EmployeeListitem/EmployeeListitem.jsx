import "./EmployeeListitem.css";
import { useRef, useState } from "react";

function EmployeeListitem(props) {
  return (
    <div className="EmployeeItem">
     <img src={props.info.image} alt="" /> 
     <h2>{props.info.name}</h2>
     <p>{props.info.position}</p>
    </div>
  );
}
export default EmployeeListitem;
