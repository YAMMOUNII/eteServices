const Product = require("../models/Product");
const uploadImage = require('./uploadController');

// Create a new Product
exports.createProduct = (req, res) => {
  uploadImage.single('image')(req, res, (err) => {
    if (err) {
      console.error("Error:", err);
      res.status(400).json({ message: "Bad Request", error: err.message });
      return;
    } else {
      console.log(req.body);
      const { fullName, merchantEmail, store, picture } = req.body;
      const newProduct = new Product({ fullName, merchantEmail, store, picture });

      newProduct.save()
        .then((product) => {
          res.status(201).json({ message: "Product created successfully", product });
        })
        .catch((err) => {
          console.error("Error:", err);
          res.status(400).json({ message: "Bad Request", error: err.message });
        });
    }
  })

};

// Read all Products
exports.getAllProducts = (req, res) => {
  Product.find()
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
  Product.findById(productId)
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
  Product.findByIdAndUpdate(productId, { fullName, merchantEmail, store, picture }, { new: true })
    .then((updatedProduct) => {
      if (updatedProduct) {
        res.json({ message: "Product updated successfully", product: updatedProduct });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error updating Product", error: err });
    });
};

// Delete a product by ID
exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId)
    .then((product) => {
      if (product) {
        res.json({ message: "Product deleted successfully" });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error deleting Product", error: err });
    });
};
