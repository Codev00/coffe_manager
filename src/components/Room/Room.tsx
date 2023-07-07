import React, { useEffect, useState } from "react";
import "./Room.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getArea, setRoomId } from "../../redux/global.slice";
const Room = () => {
   const area = useSelector((state: RootState) => state.global.area);
   const [select, setSelected] = useState(0);
   const dispatch = useDispatch();
   const handleClick = (id: number, MaKV: number) => {
      setSelected(id);
      dispatch(setRoomId(MaKV));
   };
   useEffect(() => {
      setSelected(0);
      dispatch(setRoomId(area[0]?.MaKV));
   }, [area]);
   return (
      <div className="room ">
         {area.map((item, id) => (
            <div
               className={`roomItem ${id === select ? "active" : ""}`}
               key={id}
               onClick={() => handleClick(id, item.MaKV)}
            >
               <span>{item.TenKV}</span>
            </div>
         ))}
      </div>
   );
};

export default Room;
