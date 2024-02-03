const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


//Product
router.post("/product/create", productController.createProduct);
router.get("/product/list", productController.getAllProducts);
router.get("/product/getById/:id", productController.getProductById);
router.put("/product/update/:id", productController.updateProduct);
router.delete("/product/delete/:id", productController.deleteProduct);

module.exports = router;
