import { useState } from "react";

const Navbar = () => {
    const [getActiveButton, setActiveButton] = useState("product");

    return (
        <div className="navbar">
            <div className="logo_img">
                <img src="/images/logo/icon.png" alt="Logo" />
            </div>
            <div className="barSection">
                <button
                    className={`barButton ${getActiveButton === "product" ? "active" : ""}`}
                    onClick={() => setActiveButton("product")}
                >
                    Product List
                </button>
                <button
                    className={`barButton ${getActiveButton === "addProduct" ? "active" : ""}`}
                    onClick={() => setActiveButton("addProduct")}
                >
                    Add Product
                </button>
            </div>
        </div>
    );
};

export default Navbar;
