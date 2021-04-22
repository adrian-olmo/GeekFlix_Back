'use strict';
import pkg from 'sequelize';
import { database } from "../database.js"

const { Model, DataTypes } = pkg;

export class User extends Model { }

User.init({
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize: database,
  modelName: 'User',
});
