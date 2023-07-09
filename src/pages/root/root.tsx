import Navbar from "../../layout/Navbar/Navbar";
import "./root.scss";
import { Outlet } from "react-router-dom";
import AddProduct from "../../components/Modal/AddProduct";
import Notification from "../../components/Modal/Notification";

const root = () => {
   return (
      <div className="wrapper relative">
         <AddProduct />
         <Notification />
         <Navbar />
         <div className="container-fluid">
            <Outlet />
         </div>
      </div>
   );
};

export default root;
