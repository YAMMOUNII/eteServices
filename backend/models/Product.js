const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  merchantEmail: {
    type: String,
  },
  store: {
    type: Number,
  },
  picture: {
    type: String,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;