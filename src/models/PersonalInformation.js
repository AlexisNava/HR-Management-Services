const Sequelize = require('sequelize');

module.exports = Sequelize.define('PersonalInformation', {
  id: {
    type: Sequelize.type.STRING(14),
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.type.STRING(30),
    allowNull: false,
  },
  names: {
    type: Sequelize.type.STRING(30),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.type.STRING(20),
    allowNull: false,
  },
  mothersName: {
    type: Sequelize.type.STRING(20),
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.type.NUMBER(20),
    allowNull: false,
  },
});
