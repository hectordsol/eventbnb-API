const server = require('./src/server');

PORT = 5005;

server.listen(PORT, ()=>{console.log(`Server Eventos en ${PORT}`)});