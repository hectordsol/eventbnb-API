const express = require("express");
const morgan = require("morgan");
const server = express();
const {createProxyMiddleware} = require("http-proxy-middleware");
// require('dotenv').config();
// const {CORS} = process.env;
// console.log("cors: ", CORS);
server.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');// CORS); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(morgan("dev"));
server.use('/usuarios', createProxyMiddleware
   (
    {
	target:"http://usuarios:5002",
	changeOrigin:true
    }
   )
);
server.use('/salones', createProxyMiddleware
   (
    {
	target:"http://salones:5003",
	changeOrigin:true
    }
   )
);
server.use('/eventos', createProxyMiddleware
   (
    {
	target:"http://eventos:5004",
	changeOrigin:true
    }
   )
);
server.use('/reviews', createProxyMiddleware
   (
    {
	target:"http://reviews:5005",
	changeOrigin:true
    }
   )
);

server.use('*',(req, res)=>{
    res.status(405).send('UPS in Gateway');
});
PORT = 5000;

server.listen(PORT, () => {console.log(`Gateway in port ${PORT}`)});