import React from "react";
import "./Home.scss";
import { Room, Table } from "../../components";

const Home = () => {
   return (
      <div className="bodyHome">
         <div className="main">
            <Room />
            <Table />
         </div>
         <div className="detail">detail</div>
      </div>
   );
};

export default Home;
