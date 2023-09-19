// DB sync
const models = require("../models");

module.exports = () => {
  const options = {
    force: process.env.NODE_ENV === "test" ? true : false,
  };
  return models.sequelize.sync(options);
};
// force :true 는 서버가 재구동 될때 초기화시키는 옵션
