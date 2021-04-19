import React, { useState } from "react";
import { AiFillFilter } from "react-icons/ai";

import FilterOptions from "./FilterOptions";

const Filterable = function ({ filters }) {
  const [showFilter, setShowFilter] = useState(false);
  //   const handleOnMouseEnter = () => {
  //     console.log("handleOnMouseOver method called");
  //     console.log(filters);
  //     setShowFilter(true);
  //   };

  //   const handleOnMouseOut = () => {
  //     console.log("handleOnMouseOver method called");
  //     setShowFilter(false);
  //   };

  const handleOnClick = (e) => {
    console.log("Calling onclick method");
    //e.preventDefault();
    //e.stopPropagation();
    console.dir(e.target);
    //if (e.target.name == "filterContainer") setShowFilter(!showFilter);
    setShowFilter(!showFilter);
  };

  return (
    <div
      //   onMouseOver={handleOnMouseEnter}
      //   onMouseOut={handleOnMouseOut}
      style={{ width: "100px", height: "300px" }}
      name="filterContainer"
    >
      <AiFillFilter
        style={{
          backgroundColor: "red",
          zIndex: "999",
          width: "20px",
          height: "20px",
        }}
        onClick={handleOnClick}
      />
      {showFilter ? <FilterOptions options={filters} /> : null}
    </div>
  );
};

export default Filterable;
