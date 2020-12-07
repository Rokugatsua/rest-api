const {DataTypes, Sequelize} = require('sequelize')

// const sequelize = new Sequelize()
// const _ = sequelize.define('Provinces', {
//     province_id: {
//         primaryKey
//     },

// },{timestamps})

const Provinces = {
    province_id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    province: {
        type: DataTypes.STRING,
        allowNull:false
    }
}
module.exports = {
    columns: Provinces,
    options: {
        tableName: 'mock_loc_province',
        timestamps: false
    }
}