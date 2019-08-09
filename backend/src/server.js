const express = require("express");
const routes = require("./routes");
const server = express();

server.use(routes);





server.listen(3333, () => {
    console.log("http://127.0.0.1:3333")
});