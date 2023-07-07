import { useSelector } from "react-redux";
import Navbar from "../../layout/Navbar/Navbar";
import "./root.scss";
import { Outlet } from "react-router-dom";
import AddProduct from "../../components/Modal/AddProduct";

const root = () => {
   return (
      <div className="wrapper relative">
         <AddProduct />
         <Navbar />
         <div className="container-fluid">
            <Outlet />
         </div>
      </div>
   );
};

export default root;
