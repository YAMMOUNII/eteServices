const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


//Product
router.post("/product", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/product/:id", productController.getProductById);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
