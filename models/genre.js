'use strict';

import pkg from 'sequelize';
import database from "../database.js"

const { Model, DataTypes } = pkg;


export class Genre extends Model { }
Genre.init({
  name: DataTypes.STRING
}, {
  sequelize: database,
  modelName: 'Genre',
});