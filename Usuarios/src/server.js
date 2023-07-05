const express = require('express');
const morgan = require('morgan');
//const router = require('./routes') esta es una manera de usar router luego server.use(router)
const server = express();

server.use(morgan('dev'));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// require('dotenv').config();
//const {CORS} = process.env;
//console.log("cors: ", CORS);
server.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');//CORS); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use('/usuarios',require('./routes')); // otra manera de usar router
server.use('*',(req, res)=>{
    res.status(404).send('No encontro ruta en Usuarios');
});
server.use((err,req,res,next)=>{
    res.status(err.statusCode ||500).send(
        {
            error:true,
            message: err.message,
        });
});
module.exports = server;