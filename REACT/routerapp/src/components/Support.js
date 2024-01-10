import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/about");
  }
  return (
    <div>
      Support
      <button onClick={clickHandler}>About</button>
    </div>
  );
};

export default Support;
