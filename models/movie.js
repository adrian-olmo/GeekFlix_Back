'use strict';

import pkg from 'sequelize';
import database from "../database.js"

const { Model, DataTypes } = pkg;


export class Movie extends Model { }

Movie.init({
  title: DataTypes.STRING,
  year: DataTypes.INTEGER,
  poster_path: DataTypes.STRING,
  overview: DataTypes.TEXT

}, {
  sequelize: database,
  modelName: 'Movie',
});