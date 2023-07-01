const server = require('./src/server');

PORT = 5004;

server.listen(PORT, ()=>{console.log(`Server Eventos en ${PORT}`)});