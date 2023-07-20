'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./user.models.js');
// console.log(usersModel);
const DATABASE_URL = process.env.DATABASE_URL;
const sequelizeDb = new Sequelize(DATABASE_URL);
// console.log(sequelizeDb);

const user = userModel(sequelizeDb , DataTypes);



module.exports = {sequelizeDb, user };
