const { Sequelize } = require('sequelize');
const dbConfig =  require('./config/database');
const environment = process.env.NODE_ENV || 'development';
const config = dbConfig[environment];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;
