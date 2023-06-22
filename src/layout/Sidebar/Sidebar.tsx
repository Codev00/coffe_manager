import React, { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { sidebarNH } from "../../data";
const Sidebar = () => {
   const [selected, setSelected] = useState(0);
   const handleSelected = (id: number) => {
      setSelected(id);
   };
   return (
      <div className="sidebar">
         <div className="menuItem">
            {sidebarNH.map((item, id) => (
               <div
                  className={`item ${selected === id ? "active" : ""}`}
                  onClick={() => handleSelected(id)}
                  key={id}
               >
                  <Link to={item.url}>
                     <span>{item.title}</span>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Sidebar;
