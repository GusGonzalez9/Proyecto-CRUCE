const Sequelize = require("sequelize");

const db = new Sequelize("postgres://postgres:gustihero@localhost:5433/cruce", {
  dialect: "postgres",

  logging: false,
});

module.exports = db;

//
//"postgres://postgres:novarohueyo@localhost:5432/cruce"
