const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const user = require("./api/user");
const cors = require("cors");

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/fruits", user);

module.exports = app;
