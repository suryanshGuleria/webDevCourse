import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    //move to about page
    navigate("/support");
  }
  function backHandler() {
    //move to about page
    navigate(-1);
  }
  return (
    <div>
      Labs
      <button onClick={clickHandler}>Support</button>
      <button onClick={backHandler}>Back</button>
    </div>
  );
};

export default Labs;
