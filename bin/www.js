const app = require("../index");
const syncDb = require("./sync-db");

syncDb().then((_) => {
  console.log("Sync Database !");
  app.listen(8080, () => {
    console.log("Server is running !");
  });
});
