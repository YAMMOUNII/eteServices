import { useState } from "react";
import ProductCreateModal from "../ProductModal";

const Navbar = () => {
    const [getActiveButton, setActiveButton] = useState("product");
    const [getModalCreateProduct, setModalCreateProduct] = useState(false);

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
