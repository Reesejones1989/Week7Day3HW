import "./EmployeeListitem.css";
import { useRef, useState } from "react";

function EmployeeListitem(props) {
  return (
    <div className="EmployeeItem">
      <h2>{props.info.name}</h2>
      <img src={props.info.image} alt="" />
      <p>{props.info.position}</p>
    </div>
  );
}
export default EmployeeListitem;
