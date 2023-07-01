const server = require("./src/server");
const PORT = 5001;

server.listen(PORT, () => {
    console.log("DB Server in port ",PORT);
});