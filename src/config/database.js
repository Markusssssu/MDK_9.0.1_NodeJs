const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'practice_db',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  logging: false  
});

module.exports = { sequelize, Sequelize };

// Тут наврятли будут пароли и логины:)



