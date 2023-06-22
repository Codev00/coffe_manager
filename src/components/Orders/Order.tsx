import React from "react";
import "./Order.scss";
import Bang from "../Bang/Bang";
const Order = () => {
   return (
      <div className="detail">
         <div className="title">
            <h4>HOÁ ĐƠN</h4>
         </div>
         <div className="desc">
            <div className="rowText">
               <span>Tên nhân viên: Trần Văn A</span>
               <span>Mã NV: 1</span>
               <span>Mã HH: 1</span>
            </div>
            <div className="rowText">
               <span>Tên khách hàng: Nguyễn Văn B</span>
               <span>SĐT: 0123456789</span>
            </div>
            <div className="rowText">
               <span>Phong: 1</span>
               <span>Ban: 1</span>
               <span></span>
            </div>
         </div>
         <div className="menuOrder">
            <Bang />
         </div>
         <div className="total flex items-center justify-end">
            <span className="text-lg font-bold">
               Tổng Tiền: 100000 <span>đ</span>
            </span>
         </div>
         <div className="setting flex justify-evenly mt-3">
            <div className="rounded-[3px] w-20 h-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-[3px]">
               <div className=" bg-white flex h-full w-full items-center justify-center back hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer ">
                  <span className="text-lg font-black hover:text-white w-full h-full text-center leading-[34px]">
                     Thêm
                  </span>
               </div>
            </div>
            <div className="rounded-[3px] w-auto h-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-[3px]">
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
            <div className="rounded-[3px] w-auto h-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-[3px]">
               <div className=" bg-white flex h-full w-full items-center justify-center back hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer px-2">
                  <span className="text-lg font-black hover:text-white w-full h-full text-center leading-[34px]">
                     In Bếp
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Order;
