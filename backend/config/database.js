const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ete', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
