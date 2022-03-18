const { Sequelize } = require("@sequelize/core");
require("dotenv/config");

//.env
const DBPASSWORD = process.env.DBPASSWORD;
const DBUSERNAME = process.env.DBUSERNAME;
const DBNAME = process.env.DBNAME;

//connecting database
const sequelize = new Sequelize(DBNAME, DBPASSWORD, DBUSERNAME, {
  host: "localhost",
  dialect: "mariadb",
});

module.exports = sequelize;
