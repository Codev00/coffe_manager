import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import {
   addDetailbill,
   addProduct,
   getDetailBill,
   setAddModal,
} from "../../redux/global.slice";
import { DetailBillType } from "../../types/user.type";
import http from "../../axios/http";

const AddProduct = () => {
   const dispatch = useDispatch();
   const appDispatch = useAppDispatch();
   const product = useSelector((state: RootState) => state.global.product);
   const openModal = useSelector((state: RootState) => state.global.addModal);
   const MaCH = useSelector((state: RootState) => state.global.MaCH);
   const curTable = useSelector(
      (state: RootState) => state.global.ChoosedTable
   );
   const billDetail = useSelector(
      (state: RootState) => state.global.billDetails
   );
   const [total, setTotal] = useState<number>(0);
   const [order, setOrder] = useState<number>(0);
   const [quantity, setQuantity] = useState<number>(1);
   const data: DetailBillType = {
      MaSP: order,
      SoLuong: quantity,
      ChietKhau: 0.0,
      MaCH: MaCH,
      MaHD: curTable.MaHD,
   };
   const handleAddProduct = async () => {
      try {
         await appDispatch(addDetailbill(data));
         await appDispatch(getDetailBill(curTable.MaHD));
         setOrder(0);
         setQuantity(1);
         dispatch(setAddModal(false));
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div
         id="popup-modal"
         tabIndex={-1}
         className={`fixed top-0 left-0 right-0 z-50 ${
            openModal ? "flex" : "hidden"
         } p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full items-center justify-center`}
      >
         <div className="relative w-full max-w-xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
               <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                  onClick={() => dispatch(setAddModal(false))}
               >
                  <svg
                     className="w-3 h-3"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 14 14"
                  >
                     <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                     />
                  </svg>
                  <span className="sr-only">Close modal</span>
               </button>
               <div className="p-6 text-center">
                  <svg
                     className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 20 20"
                  >
                     <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                     />
                  </svg>
                  <div className="mb-5 text-lg font-normal">
                     <select
                        className="select select-accent w-full max-w-xs mb-2 bg-white"
                        value={order}
                        onChange={(e: any) => {
                           setOrder(e.target.value);
                        }}
                     >
                        <option defaultValue={0}>Order</option>
                        {product.map((item) => (
                           <option key={item.MaSP} value={item.MaSP}>
                              {item.TenSP}
                           </option>
                        ))}
                     </select>
                     <input
                        type="number"
                        placeholder="Số Lượng"
                        onChange={(e: any) => {
                           setQuantity(e.target.value);
                        }}
                        value={quantity}
                        className="input input-bordered input-success w-full max-w-xs bg-white"
                     />
                  </div>
                  <button
                     className="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500  hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 mr-2"
                     onClick={handleAddProduct}
                  >
                     <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                     <span className="relative text-white">Thêm</span>
                  </button>
                  <button
                     className="relative rounded px-5 py-2.5 overflow-hidden group bg-red-500  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300 mr-2"
                     onClick={() => {
                        dispatch(setAddModal(false));
                     }}
                  >
                     <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                     <span className="relative text-white">Huỷ</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AddProduct;
