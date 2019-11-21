'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'shops',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      thumb_url: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    }
  ),

  down: (queryInterface, Sequelize) => queryInterface.dropTable("shops")
};
