import React, { useLayoutEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../../components/icon/Logo.svg";
import bell from "../../components/icon/Bell.svg";
import avatar from "../../components/icon/ys.jpg";
import { NavbarTitle } from "../../data";
const Navbar = () => {
   const [selected, setSelected] = useState(0);
   const param = useParams();
   const navigate = useNavigate();
   const curId = useRef<number>(0);
   const handleSelected = (id: number): void => {
      setSelected(id);
      curId.current = id;
      console.log(curId.current);
   };
   useLayoutEffect(() => {
      navigate("/");
      setSelected(curId.current);
      return () => {};
   }, []);
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
               {NavbarTitle.map((item, id) => (
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
