const mongoose = require("mongoose");

const dbSrv = "mongodb://127.0.0.1:27017/demo_project_1";
mongoose.set('strictQuery', false);

mongoose
  .connect(dbSrv, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { db: mongoose.connection };
