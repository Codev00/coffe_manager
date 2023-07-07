import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../../components/icon/Logo.svg";
import bell from "../../components/icon/Bell.svg";
import avatar from "../../components/icon/ys.jpg";
import { NavbarTitle } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { getStore, setMaCH } from "../../redux/global.slice";
import { RootState, useAppDispatch } from "../../store";
const Navbar = () => {
   const [selected, setSelected] = useState(0);
   const navigate = useNavigate();
   const curId = useRef<number>(0);
   const dispatch = useDispatch();
   const appDispatch = useAppDispatch();
   const MaCty = useSelector((state: RootState) => state.user.MaCty);
   const store = useSelector((state: RootState) => state.global.store);
   const [value, setValue] = useState(store[0]?.MaCH);
   const handleSelected = (id: number): void => {
      setSelected(id);
      curId.current = id;
   };
   useLayoutEffect(() => {
      navigate("/");
      setSelected(curId.current);
      return () => {};
   }, []);
   useEffect(() => {
      appDispatch(getStore(MaCty));
   }, [MaCty]);
   const handleChange = (e: any) => {
      setValue(e.target.value);
      dispatch(setMaCH(e.target.value));
   };
   return (
      <div className="navBar bg-slate-900 text-yellow-50">
         <div className="logo">
            <img src={logo} alt="" />
            <span className="text-white">
               Cafe <span className="text-green-600">Manager</span>
            </span>
         </div>
         <div className="body">
            <div className="menu">
               {NavbarTitle.map((item, id) => (
                  <div
                     className={`navItem  px-2.5 py-1.5 rounded-lg ${
                        selected === id ? "active" : ""
                     }`}
                     key={id}
                     onClick={() => handleSelected(id)}
                  >
                     <Link to={item.path}>
                        <span className="text-white">{item.title}</span>
                     </Link>
                  </div>
               ))}
            </div>
            <div className="status">
               <div className="notify">
                  <select
                     id="underline_select"
                     className="block py-1 px-0 w-full text-sm text-green-500 bg-transparent  border-b-2 border-green-500 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-green-400 peer"
                     value={value}
                     onChange={handleChange}
                  >
                     {store.map((item, id) => (
                        <option key={id} value={item.MaCH}>
                           {item.tenCH}
                        </option>
                     ))}
                  </select>
               </div>
               <div className="user">
                  <img src={avatar} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
