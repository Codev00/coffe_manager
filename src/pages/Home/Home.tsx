import React from "react";
import "./Home.scss";
import { Room, Table } from "../../components";
import Order from "../../components/Orders/Order";

const Home = () => {
   return (
      <div className="bodyHome">
         <div className="main">
            <Room />
            <Table />
         </div>
         <Order />
      </div>
   );
};

export default Home;
