'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.type.STRING(14),
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: Sequelize.type.STRING(40),
        allowNull: false,
      },
      isAdmin: {
        type: Sequelize.type.BOOLEAN(),
        allowNull: false,
        defaultValue: false,
      },
      isActive: {
        type: Sequelize.type.BOOLEAN(),
        allowNull: false,
        defaultValue: true,
      },
      createdAt: Sequelize.type.DATE(),
      updatedAt: Sequelize.type.DATE(),
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
