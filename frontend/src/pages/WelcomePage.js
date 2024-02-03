import React, { useState } from "react";
import "./../utils/Style/pages/WelcomePage.scss";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="WelcomePage">
     <button onClick={()=>{
      sessionStorage.setItem("Token",true);
      navigate("/product")
     }}>Go to Product</button>
    </div>
  );
}

export default WelcomePage;
