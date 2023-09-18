const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
}); // DB와 연동

const User = sequelize.define("User", {
  name: Sequelize.STRING,
}); // 테이블명 과 속성

module.exports = { Sequelize, sequelize, User };
