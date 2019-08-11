const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DeslikesController = require("./controllers/DeslikesController");

const routes = express.Router();

// rotas do meu app
routes
    .get("/devs", DevController.index)
    .post("/devs", DevController.store)
    .post("/devs/:devId/likes", LikeController.store)
    .post("/devs/:devId/deslikes", DeslikesController.store)


module.exports = routes;