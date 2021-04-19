import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

import "./FilterOptions.style.css";

const FilterOptions = function ({ options }) {
  console.log("filterableOptions", options);
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    setFilterOptions(
      options.map((option) => {
        return { option: option, checked: false };
      })
    );
  }, [options]);

  const handleCheckboxClick = (option, checked) => {
    console.log("handleCheckboxClick");
    console.log(option);
    //setFilterOptions([...filterOptions, { option: option, checked: !checked }]);
    const optionIndex = filterOptions.findIndex(
      (element) => element.option == option
    );
    let newFilterOptions = [...filterOptions];
    newFilterOptions[optionIndex] = { option: option, checked: !checked };
    setFilterOptions(newFilterOptions);
  };

  const renderOptions = (filters) => {
    return filters.map(({ option, checked }) => {
      return (
        <Checkbox
          option={option}
          checked={checked}
          handleCheckboxClick={handleCheckboxClick}
        />
      );
    });
  };

  const handleChange = (option) => {};

  return (
    <div id="filterTable">
      {renderOptions(filterOptions)}
      <div id="filterFooter">
        <label>Apply</label>
        <label>Clear All</label>
      </div>
    </div>
  );
};

export default FilterOptions;
