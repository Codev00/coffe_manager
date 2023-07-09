import React, { useLayoutEffect } from "react";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setMsg, setNotification } from "../../redux/global.slice";

const Notification = () => {
   const Notification = useSelector(
      (state: RootState) => state.global.Notification
   );
   const dispatch = useDispatch();
   const msg = useSelector((state: RootState) => state.global.msg);
   useLayoutEffect(() => {
      const timeId = setTimeout(() => {
         dispatch(setMsg(""));
         dispatch(setNotification(false));
      }, 5000);
      return () => {
         clearTimeout(timeId);
      };
   }, [msg]);
   const handleClose = () => {
      dispatch(setNotification(false));
   };
   return (
      <div
         id="popup-modal"
         tabIndex={-1}
         className={`fixed top-0 left-0 right-0 z-50 ${
            Notification ? "flex" : "hidden"
         } items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
         <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
               <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
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
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                     {msg}
                  </h3>
                  <button
                     data-modal-hide="popup-modal"
                     type="button"
                     className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                     onClick={handleClose}
                  >
                     OK
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Notification;
