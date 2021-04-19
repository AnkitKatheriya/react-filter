import React from "react";

const Checkbox = function ({ option, checked, handleCheckboxClick }) {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log(option, checked);
  const handleClick = () => {
    handleCheckboxClick(option, checked);
  };
  return (
    <div>
      <input type="checkbox" checked={checked} onClick={handleClick} />
      <label>{option}</label>
    </div>
  );
};

export default Checkbox;
