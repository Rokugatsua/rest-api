'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cities', {
      city_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      province_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Provinces",
          key: "Province_id"
        }
      },
      province: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      city_name: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cities');
  }
};