const Sequelize = require('sequelize');

module.exports = Sequelize.define('User', {
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
