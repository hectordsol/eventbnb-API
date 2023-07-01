const server = require('./src/server');

PORT = 5003;

server.listen(PORT, ()=>{console.log(`Servidor Salones en puerto ${PORT}`)});