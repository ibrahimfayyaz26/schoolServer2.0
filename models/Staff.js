const db = require("../db/db");
const { DataTypes } = require("@sequelize/core");

//models
const Staff = db.define("Staff", {
  key: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  staff: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Staff;
