import { useEffect, useState } from "react";
import "./Home.scss";
import { RootState, useAppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import {
   createBill,
   editTable,
   getTable,
   setChoosedTable,
   setMaHD,
} from "../../redux/global.slice";
const NoBill = () => {
   const appDispatch = useAppDispatch();
   const dispatch = useDispatch();
   const CurrentTable = useSelector(
      (state: RootState) => state.global.ChoosedTable
   );
   const MaCH = useSelector((state: RootState) => state.global.MaCH);

   const [bill, setBill] = useState({
      MaNV: 1,
      MaKV: CurrentTable.MaKV,
      MaBan: CurrentTable.MaBan,
      TrangThai: 0,
      TongThu: 0,
      MaCH: MaCH,
   });

   useEffect(() => {
      setBill({
         MaNV: 1,
         MaKV: CurrentTable.MaKV,
         MaBan: CurrentTable.MaBan,
         TrangThai: 0,
         TongThu: 0,
         MaCH: MaCH,
      });
   }, [CurrentTable]);

   const handleClick = async () => {
      const result = await appDispatch(createBill(bill));
      console.log(result);

      const newTable = {
         MaBan: CurrentTable.MaBan,
         MaKV: CurrentTable.MaKV,
         MaCH: CurrentTable.MaCH,
         TenBan: CurrentTable.TenBan,
         TrangThai: 1,
         MaHD: result.payload.id,
      };

      dispatch(setChoosedTable(newTable));
      appDispatch(editTable({ id: CurrentTable.MaBan, data: newTable }));
      dispatch(setMaHD(true));
   };
   useEffect(() => {
      if (CurrentTable.MaHD) {
         dispatch(setMaHD(true));
      }
      appDispatch(getTable(MaCH));
   }, [CurrentTable]);
   return (
      <div className="detail flex flex-col items-center justify-center">
         <h3>Bàn: {CurrentTable?.TenBan}</h3>
         <div
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 cursor-pointer"
            onClick={handleClick}
         >
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
               <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
               </svg>
            </span>
            <span className="relative">Mở Bàn</span>
         </div>
      </div>
   );
};

export default NoBill;
