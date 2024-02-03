import React from "react";
import { getCurrentDate } from "../../utils/Functions";

const Header = () => {
  const currentDate = getCurrentDate();

  return (
    <div className="header">
      <span>Header</span>
      <span>{currentDate}</span>
    </div>
  );
};

export default Header;
