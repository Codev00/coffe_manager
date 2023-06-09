import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../components/icon/Logo.svg";
import bell from "../../components/icon/Bell.svg";
import avatar from "../../components/icon/ys.jpg";
const Navbar = () => {
   const data = [
      {
         title: "Đặt Hàng",
         path: "/",
      },
      {
         title: "Nhập Hàng",
         path: "/import",
      },
      {
         title: "Hoá Đơn",
         path: "/bill",
      },
      {
         title: "Quản Lý",
         path: "/manager",
      },
   ];

   const [selected, setSelected] = useState(0);
   const handleSelected = (id: number): void => {
      setSelected(id);
   };
   return (
      <div className="navBar bg-slate-900 text-yellow-50">
         <div className="logo">
            <img src={logo} alt="" />
            <span className="text-white">
               Cafe <span className="text-green-600">Manager</span>
            </span>
         </div>
         <div className="body">
            <div className="menu">
               {data.map((item, id) => (
                  <div
                     className={`navItem  px-2.5 py-1.5 rounded-lg ${
                        selected === id ? "active" : ""
                     }`}
                     key={id}
                     onClick={() => handleSelected(id)}
                  >
                     <Link to={item.path}>
                        <span className="text-white">{item.title}</span>
                     </Link>
                  </div>
               ))}
            </div>
            <div className="status">
               <div className="notify">
                  <img src={bell} alt="" />
               </div>
               <div className="user">
                  <img src={avatar} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
