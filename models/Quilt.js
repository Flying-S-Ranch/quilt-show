const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quilt extends Model {}

Quilt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    quilt_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'quilt'
  }
);

module.exports = Quilt;
