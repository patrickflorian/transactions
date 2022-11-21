'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const { Transaction } = require('./models');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
// sequelize = new Sequelize('sqlite::memory:');


// let Transaction = (sequelize, DataTypes) =>
//   sequelize.define('Transaction', {
//     id: {
//       type: DataTypes.UUID,
//       allowNull: false,
//       primaryKey: true,
//       defaultValue: DataTypes.UUIDV4,
//     },
//     value: DataTypes.DOUBLE,
//     timestamp: DataTypes.BIGINT,
//     receiver: DataTypes.STRING,
//     confirmed: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     },
//     sender: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Transaction',
//   });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Transaction = Transaction;
module.exports = db;
