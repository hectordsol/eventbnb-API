const express = require("express");
const morgan= require("morgan");
// const cookieParser = require('cookie-parser');
const server = express();
server.use(express.json());
server.use(morgan("dev"));
// server.use(cookieParser());
// require('dotenv').config();
// const {CORS} = process.env;
// console.log("cors: ", CORS);
server.use(express.urlencoded({ extended: true }));
server.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');//CORS); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.use(require("./routes"));
server.use('*',(req, res)=>{
    res.status(404).send('UPS database');
});
module.exports = server;