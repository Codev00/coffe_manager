import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { getListBill } from "../../redux/global.slice";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { spawn } from "child_process";

const HoaDon = () => {
   const listBill = useSelector((state: RootState) => state.global.listBill);
   const MaCH = useSelector((state: RootState) => state.global.MaCH);
   const appDispatch = useAppDispatch();
   useEffect(() => {
      appDispatch(getListBill(MaCH));
   }, [MaCH]);
   useEffect(() => {}, [listBill]);
   return (
      <div className="flex flex-col justify-center items-center">
         <h2 className="my-4">DANH SÁCH HOÁ ĐƠN</h2>
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center">
            <table className="w-5/5 text-sm text-left text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3">
                        Time
                     </th>
                     <th scope="col" className="px-6 py-3">
                        ID
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Status
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Price
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Action
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {listBill.map((item, index) => (
                     <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                           scope="row"
                           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                           {format(
                              new Date(item.created_at),
                              "yyyy/MM/dd kk:mm:ss"
                           )}
                        </th>
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">
                           {item.TrangThai == 0 ? (
                              <span className="text-red-500 border-1 p-1 rounded border-red-500">
                                 Chưa Thanh Toán
                              </span>
                           ) : (
                              <span className="text-green-500 border-1 p-1 rounded border-green-500">
                                 Thanh Toán
                              </span>
                           )}
                        </td>
                        <td className="px-6 py-4">{item.TongThu} đ</td>
                        <td className="px-6 py-4">
                           <Link
                              to="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                           >
                              Detail
                           </Link>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default HoaDon;
