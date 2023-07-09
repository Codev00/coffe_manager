import React, { useEffect, useState, useLayoutEffect } from "react";
import "./Table.scss";
import { RootState, useAppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { TableType } from "../../types/user.type";
import { log } from "console";
import {
   getBill,
   getTable,
   setChoosedTable,
   setMaHD,
} from "../../redux/global.slice";
const Table = () => {
   const RoomId = useSelector((state: RootState) => state.global.RoomId);
   const table = useSelector((state: RootState) => state.global.table);
   const MaCH = useSelector((state: RootState) => state.global.MaCH);
   const currentTable = useSelector(
      (state: RootState) => state.global.ChoosedTable
   );
   const dispatch = useDispatch();
   const appDispatch = useAppDispatch();
   const [newTable, setNewTable] = useState<TableType[]>([]);

   useEffect(() => {
      setNewTable([]);
      appDispatch(getTable(MaCH));
   }, [RoomId, currentTable]);
   useEffect(() => {
      setNewTable([]);
      table.map((item, id) => {
         if (item.MaKV == RoomId) {
            setNewTable((prev) => [...prev, item]);
         }
      });
   }, [RoomId, table]);

   useLayoutEffect(() => {
      if (currentTable.MaHD) {
         dispatch(setMaHD(true));
         appDispatch(getBill(currentTable.MaHD));
      }
   }, [currentTable]);

   const handleClick = (table: TableType) => {
      dispatch(setChoosedTable(table));
      dispatch(setMaHD(false));
   };
   return (
      <div className="coffeTable bg-slate-200 rounded-lg">
         {newTable.map((item, id) => (
            <div
               className={`tableItem bg-white cursor-pointer border-l-[5px] border-solid border-gray-500 ${
                  item.TrangThai === 1 ? "border-green-600" : ""
               }`}
               key={id}
               onClick={() => handleClick(item)}
            >
               <span className="text-slate-400 text-2xl">{item.TenBan}</span>
               <span className="text-lg">
                  Status: {item.TrangThai === 1 ? "on" : "off"}
               </span>
            </div>
         ))}
      </div>
   );
};

export default Table;
