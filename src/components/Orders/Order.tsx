import React, { useEffect, useState } from "react";
import "./Order.scss";
import Bang from "../Bang/Bang";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import http from "../../axios/http";
import { Staff } from "../../types/user.type";
import {
   getBill,
   getTable,
   setAddModal,
   setChoosedTable,
   setMaHD,
   setNotification,
   setPay,
   setPayBill,
} from "../../redux/global.slice";
const Order = () => {
   const dispatch = useDispatch();
   const appDispatch = useAppDispatch();
   const MaCH = useSelector((state: RootState) => state.global.MaCH);
   const total = useSelector((state: RootState) => state.global.total);
   const MaHD = useSelector((state: RootState) => state.global.MaHD);
   const [staff, setStaff] = useState<Staff>({
      MaNV: 0,
      HoTen: "",
      NgaySinh: new Date(),
      GioiTinh: "",
      sdt: "",
      DiaChi: "",
      MaCH: 0,
   });
   const curTable = useSelector(
      (state: RootState) => state.global.ChoosedTable
   );
   const curBill = useSelector((state: RootState) => state.global.CurrentBill);
   const billDetail = useSelector(
      (state: RootState) => state.global.billDetails
   );
   const table = useSelector((state: RootState) => state.global.table);
   const msg = useSelector((state: RootState) => state.global.msg);

   useEffect(() => {
      http.get<Staff>("/staff/" + curBill.MaNV).then((res) => {
         setStaff(res.data);
      });
   }, [curBill]);
   useEffect(() => {}, [billDetail, curBill]);
   const handlePay = async () => {
      try {
         appDispatch(setPayBill({ id: curBill.MaHD, TongThu: total }));
         appDispatch(setPay(curTable.MaBan));
         appDispatch(getTable(MaCH));
         appDispatch(setChoosedTable([]));
         dispatch(setMaHD(false));
         dispatch(setNotification(true));
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {}, [table, MaHD]);
   return (
      <div className="detail">
         <div className="title">
            <h4>HOÁ ĐƠN</h4>
         </div>
         <div className="desc">
            <div className="rowText">
               <span>Tên nhân viên: {staff.HoTen}</span>
               <span>Mã NV: {curBill.MaNV}</span>
               <span>Mã HĐ: {curBill.MaHD}</span>
            </div>
            <div className="rowText">
               <span>Phòng: {curTable.MaKV}</span>
               <span>Bàn: {curTable.MaBan}</span>
               <span></span>
            </div>
         </div>
         <div className="menuOrder">
            <Bang />
         </div>
         <div className="total flex items-center justify-end">
            <span className="text-lg font-bold">
               Tổng Tiền: {total} <span>đ</span>
            </span>
         </div>
         <div className="setting flex justify-evenly mt-3">
            <div className="rounded-[3px] w-20 h-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-[3px]">
               <div className=" bg-white flex h-full w-full items-center justify-center back hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer ">
                  <span
                     className="text-lg font-black hover:text-white w-full h-full text-center leading-[34px]"
                     onClick={() => dispatch(setAddModal(true))}
                  >
                     Thêm
                  </span>
               </div>
            </div>
            <div
               className="rounded-[3px] w-auto h-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-[3px]"
               onClick={handlePay}
            >
               <div className=" bg-white flex h-full w-full items-center justify-center back hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer px-2">
                  <span className="text-lg font-black hover:text-white w-full h-full text-center leading-[34px]">
                     Thanh Toán
                  </span>
               </div>
            </div>
            <div className="rounded-[3px] w-auto h-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-[3px]">
               <div className=" bg-white flex h-full w-full items-center justify-center back hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer px-2">
                  <span className="text-lg font-black hover:text-white w-full h-full text-center leading-[34px]">
                     In Hoá Đơn
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Order;
