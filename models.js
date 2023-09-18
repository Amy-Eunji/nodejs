const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
  logging: false,
}); // DB와 연동

const User = sequelize.define("User", {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
}); // 테이블명 과 속성

module.exports = { Sequelize, sequelize, User };
