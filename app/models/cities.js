'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cities.init({
    city_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    province_id:{
      type: DataTypes.INTEGER,
      references: {
        model:'Provinces',
        key: 'province_id'
      }
    },
    province: DataTypes.STRING,
    type: DataTypes.STRING,
    city_name: DataTypes.STRING,
    postal_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cities',
    timestamps: false
  });
  return Cities;
};