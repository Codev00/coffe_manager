import React, { useEffect, useLayoutEffect } from "react";
import "./Home.scss";
import { Room, Table } from "../../components";
import Order from "../../components/Orders/Order";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import {
   getArea,
   getProduct,
   getStaff,
   getTable,
} from "../../redux/global.slice";
import NoBill from "./NoBill";
import AddProduct from "../../components/Modal/AddProduct";

const Home = () => {
   const username = useSelector((state: RootState) => state.user.username);
   const MaCH = useSelector((state: RootState) => state.global.MaCH);
   const MaHD = useSelector((state: RootState) => state.global.MaHD);
   const table = useSelector((state: RootState) => state.global.table);
   const curTable = useSelector(
      (state: RootState) => state.global.ChoosedTable
   );
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      if (!username) {
         navigate("/user");
      }
   }, [username]);
   useLayoutEffect(() => {
      dispatch(getStaff(MaCH));
      dispatch(getArea(MaCH));
      dispatch(getTable(MaCH));
      dispatch(getProduct(MaCH));
   }, [MaCH]);
   return (
      <div className="bodyHome">
         <div className="main">
            <Room />
            <Table />
         </div>
         {MaHD || (curTable && <NoBill />)}
         {MaHD && <Order />}
      </div>
   );
};

export default Home;
