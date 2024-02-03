const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Product = db.define('Product', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  merchantEmail: {
    type: DataTypes.STRING,
  },
  store: {
    type: DataTypes.INTEGER,
  },
  picture: {
    type: DataTypes.STRING,
  }
});

module.exports = Product;
