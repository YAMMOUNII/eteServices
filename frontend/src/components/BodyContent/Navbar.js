import { useState } from "react";
import ProductCreateModal from "../ProductModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [getActiveButton, setActiveButton] = useState("product");
    const [getModalCreateProduct, setModalCreateProduct] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="logo_img">
                <img src="/images/logo/icon.png" onClick={() => navigate("/")} style={{ cursor: "pointer" }} alt="Logo" />
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
                    onClick={() => {
                        setActiveButton("addProduct");
                        setModalCreateProduct(true);
                    }}
                >
                    Add Product
                </button>
            </div>

            <ProductCreateModal
                show={getModalCreateProduct}
                onHide={() => setModalCreateProduct(false)} />
        </div>
    );
};

export default Navbar;
