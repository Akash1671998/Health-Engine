


const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const { ConnectDB } = require('./src/config/db');
const dotenv = require("dotenv");
const cors = require("cors");

// ENV File Configuration
dotenv.config();

// MongoDb Connection
ConnectDB();

// rest Object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use('/api/v1/user', require('./src/routes/userRoute')); 

// port
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(
    `Application Running In ${process.env.NODE_ENV} Mode On Port ${port}`.blue.red
  );
});
