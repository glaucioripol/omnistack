const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();
mongoose.connect("mongodb+srv://glaucioadmin:6161@0792@cluster0-vdz3h.mongodb.net/bdomnistack?retryWrites=true&w=majority",
{
    useNewUrlParser: true
});


server.use(express.json());
server.use(routes);


server.listen(3333, () => {
    console.log("http://127.0.0.1:3333")
});