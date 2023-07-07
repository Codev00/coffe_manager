import React, { useEffect, useRef, useState } from "react";
import "./SignIn.module.scss";
import { RootState, useAppDispatch } from "../../store";
import { login } from "../../redux/login.slice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface FormSubmit {
   username: string;
   password: string;
}

const initialState = {
   username: "",
   password: "",
};
const SignIn = () => {
   const username = useSelector((state: RootState) => state.user.username);
   const [formData, setFormData] = useState<FormSubmit>(initialState);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      if (username) {
         navigate("/");
      }
   }, [username]);
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const promise = dispatch(login(formData));
      if (promise.requestId) {
         navigate("/");
      }
   };
   return (
      <div className="flex flex-col items-center gap-10  ">
         <div className="header">
            <h1>Coffe Manager</h1>
         </div>
         <div className="bodySignIn">
            <form action="" onSubmit={handleSubmit}>
               <div className="relative z-0 w-full mb-6 group">
                  <input
                     type="text"
                     name="username"
                     id="username"
                     className="block py-2.5 px-1 w-full text-sm text-white bg-transparent  border-b-2 border-gray-500 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-green-500 peer"
                     placeholder=" "
                     autoComplete="false"
                     value={formData.username}
                     onChange={(event) =>
                        setFormData((prev) => ({
                           ...prev,
                           username: event.target.value,
                        }))
                     }
                     required
                  />
                  <label
                     htmlFor="username"
                     className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                     Username
                  </label>
               </div>
               <div className="relative z-0 w-full mb-6 group">
                  <input
                     type="password"
                     name="password"
                     id="password"
                     className="block py-2.5 px-1 w-full text-sm text-white bg-transparent border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                     placeholder=" "
                     value={formData.password}
                     onChange={(event) =>
                        setFormData((prev) => ({
                           ...prev,
                           password: event.target.value,
                        }))
                     }
                     required
                  />
                  <label
                     htmlFor="password"
                     className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                     Password
                  </label>
               </div>
               <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75  text-white bg-slate-800 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 hover:text-slate-900">
                     Sign In
                  </span>
               </button>
            </form>
         </div>
      </div>
   );
};

export default SignIn;
