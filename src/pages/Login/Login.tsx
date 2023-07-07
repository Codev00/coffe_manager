import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Outlet } from "react-router-dom";
import "./Login.module.scss";
import { SignIn } from "../../components";
const Login = () => {
   return (
      <div className="wrapper bg-slate-800 h-screen flex flex-col items-center justify-center">
         <SignIn />
      </div>
   );
};

export default Login;
