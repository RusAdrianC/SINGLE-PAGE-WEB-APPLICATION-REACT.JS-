import React from "react";
import { FaRobot } from "react-icons/fa";

const Specializare = (props) => {
  return (
    <div className="Specializare">
      <h3>{props.title}</h3>
      <FaRobot size="10rem" />
      <p className="ContinutSpecializare">{props.continut.substring(0, 200)}</p>
    </div>
  );
};
export default Specializare;
