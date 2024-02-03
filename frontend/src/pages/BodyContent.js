import React from "react";
import { Outlet } from "react-router-dom";
import "./../utils/Style/components/Outlet.scss";
import Header from "../components/BodyContent/Header";
import Navbar from "../components/BodyContent/Navbar";
import Drawer from "../components/BodyContent/Drawer";

function BodyContent() {
  return (
    <div className="Outlet_Container">
      <div className="LeftBar">
        <Navbar />
      </div>

      <div className="RightBar">
        <Header />

        <div className="body">
          <Outlet />
        </div>

        <div className="footer">
          2024 Copyrights © <span>Ete</span>
        </div>
      </div>

      <Drawer />
    </div>
  );
}

export default BodyContent;
