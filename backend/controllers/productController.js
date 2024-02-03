const Product = require("../models/Product");

// Create a new Product
exports.createProduct = (req, res) => {
  console.log("Request Body:", req.body);
  const { fullName, merchantEmail, store, picture } = req.body;
  Product.create({ fullName, merchantEmail, store, picture })
    .then((product) => {
      res.status(201).json({ message: "Product created successfully", product });
    })
    .catch((err) => {
      console.error("Error:", err);
      res.status(400).json({ message: "Bad Request", error: err.message });
    });
};

// Read all Products
exports.getAllProducts = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.json({ products });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving Products", error: err });
    });
};

// Read a specific Product by ID
exports.getProductById = (req, res) => {
  const productId = req.params.id;
  Product.findByPk(productId)
    .then((product) => {
      if (product) {
        res.json({ product });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving Product", error: err });
    });
};

// Update a Product by ID
exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  const { fullName, merchantEmail, store, picture } = req.body;
  Product.findByPk(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      product.fullName = fullName;
      product.merchantEmail = merchantEmail;
      product.store = store;
      product.picture = picture;
      return product.save();
    })
    .then((updatedProduct) => {
      res.json({ message: "Product updated successfully", product: updatedProduct });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error updating Product", error: err });
    });
};

// Delete a product by ID
exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  Product.findByPk(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return product.destroy();
    })
    .then(() => {
      res.json({ message: "Product deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error deleting Product", error: err });
    });
};
