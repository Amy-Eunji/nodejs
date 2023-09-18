// DB sync
const models = require("../models");

module.exports = () => {
  const options = {
    force: process.env.NODE_ENV === "test" ? true : false,
  };
  return models.sequelize.sync(options);
  // 기존의 db가 있더라도 새로만든다는 의미
};
