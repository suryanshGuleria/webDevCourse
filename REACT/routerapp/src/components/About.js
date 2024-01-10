import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/labs");
  }
  return (
    <div>
      About
      <button onClick={clickHandler}>Labs</button>
    </div>
  );
};

export default About;
