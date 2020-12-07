const {Model, DataTypes, Sequelize} = require('sequelize')

class Cities extends Model {}

Cities.init({
    city_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    province_id: {
        type: DataTypes.INTEGER,
    },
    province: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING,
    },
    city_name: {
        type: DataTypes.STRING,
    },
    postal_code: {
        type: DataTypes.STRING
    }
},{tableName:'mock_loc_city', timestamps:false})

module.exports = Cities