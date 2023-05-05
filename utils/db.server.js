const db = require('../models/index.server')

db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Synced");
  })
  .catch((err) => {
    console.log("some error occured while connecting to DB", err);
  });