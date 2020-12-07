'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Provinces', {
      province_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      province: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Provinces');
  }
};