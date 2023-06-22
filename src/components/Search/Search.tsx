import React from "react";
import "./Search.scss";
import search from "../icon/search.svg";
const Search = () => {
   return (
      <div className="Search">
         <div className="bodySearch">
            <label htmlFor="search">
               <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <input
               type="text"
               id={"search"}
               placeholder="Tim kiem san pham"
               autoComplete="off"
            />
         </div>
      </div>
   );
};

export default Search;
