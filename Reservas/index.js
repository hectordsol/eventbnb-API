const server = require('./src/server');

PORT = 5006;

server.listen(PORT, ()=>{console.log(`Server Eventos en ${PORT}`)});