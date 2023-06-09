import React from "react";
import Navbar from "../../layout/Navbar/Navbar";
import "./root.scss";
import { Outlet } from "react-router-dom";
const root = () => {
   return (
      <div className="wrapper">
         <Navbar />
         <div className="container-fluid">
            <Outlet />
         </div>
      </div>
   );
};

export default root;
