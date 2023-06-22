import React, { useLayoutEffect } from "react";
import "./NhapHang.scss";
import Sidebar from "../../layout/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
const NhapHang = () => {
   const navigate = useNavigate();
   useLayoutEffect(() => {
      navigate("/import/warehouse");
      return () => {};
   }, []);
   return (
      <div className="bodyImport">
         <Sidebar />
         <div className="mainImport">
            <Outlet />
         </div>
      </div>
   );
};

export default NhapHang;
