import React, { useState } from "react";
import "./../utils/Style/pages/WelcomePage.scss";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  const spanArray = Array.from({ length: 50 }, (_, i) => i);
  return (
    <div className="WelcomePage">
      <div className="container">
        <div className={`login-box`}>
          <button onClick={() => {
            sessionStorage.setItem("Token", true);
            navigate("/product")
          }}>Go to Product</button>
        </div>
        {spanArray.map((_, i) => (
          <span key={i} style={{ "--i": i }}></span>
        ))}
      </div>

    </div>
  );
}

export default WelcomePage;
