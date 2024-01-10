import React from "react";
import { Outlet } from "react-router-dom";

const MainHeader = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainHeader;
