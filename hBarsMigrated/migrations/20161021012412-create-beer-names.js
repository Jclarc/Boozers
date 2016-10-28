'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('beer_names', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      aroma: {
        type: Sequelize.STRING
      },
      abv: {
        type: Sequelize.DECIMAL(10,2)
      },
      style: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      key_notes: {
        type: Sequelize.STRING
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('beer_names');
  }
};