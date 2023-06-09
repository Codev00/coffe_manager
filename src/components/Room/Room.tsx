import React from "react";
import "./Room.scss";
import { Link } from "react-router-dom";
const Room = () => {
   return (
      <div className="room ">
         <div className="roomItem active">
            <Link to={"/room/:id"}>
               <span>Phong 1</span>
            </Link>
         </div>
         <div className="roomItem ">
            <Link to={"/room/:id"}>
               <span>Phong 2</span>
            </Link>
         </div>
         <div className="roomItem ">
            <Link to={"/room/:id"}>
               <span>Phong 3</span>
            </Link>
         </div>
      </div>
   );
};

export default Room;
