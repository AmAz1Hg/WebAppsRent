require("dotenv").config();
const express = require('express');
const sequelize = require("./dataBase");
const models = require("./DBmodels/DBmodels");
const PORT = process.env.PORT || 5000;
const router = require("./routes/index");
const cors = require("cors");
const errorMiddleware = require("./middleware/errorMiddleware");
const path = require("path");
const filesUpload = require("express-fileupload");

const application = express();
application.use(cors());
application.use(filesUpload({}));
application.use(express.json());
application.use(express.static(path.resolve(__dirname, "static")));
application.use('/api', router);

// Ошибка
application.use(errorMiddleware);

const starting = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    application.listen(PORT, () => console.log("Start server"));
  } catch (e) {
    console.log(e);
  }
};

starting();
