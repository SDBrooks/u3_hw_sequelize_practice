'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Upcoming extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Upcoming.init({
    title: DataTypes.STRING,
    studio: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    publisher: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Upcoming',
    tableName: 'upcomings'
  });
  return Upcoming;
};