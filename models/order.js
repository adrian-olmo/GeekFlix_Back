'use strict';

import pkg from 'sequelize';
import database from "../database.js"

const { Model, DataTypes } = pkg;


export class Order extends Model { }

Order.init({
  rentstart: DataTypes.DATE,
  rentend: DataTypes.DATE,
  status: DataTypes.STRING,
  userID: DataTypes.INTEGER,
  movieID: DataTypes.INTEGER
}, {
  sequelize: database,
  modelName: 'Order',
});