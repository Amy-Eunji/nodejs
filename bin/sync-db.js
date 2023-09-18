// DB sync
const models = require("../models");

module.exports = () => {
  return models.sequelize.sync({ force: true });
  // 기존의 db가 있더라도 새로만든다는 의미
};
