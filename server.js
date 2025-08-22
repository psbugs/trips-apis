const express = require('express');
const { connectToDb } = require('./src/config/db-connection');
require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./src/routes");
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "*" })); 

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',routes);

const serverPort = process.env.PORT || 3001

app.listen(serverPort,()=> {
    connectToDb();
    console.log(`Server is running on port ${serverPort}`)
});