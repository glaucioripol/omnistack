
const express = require("express");

const routes = express.Router();

routes
    .get("/", (req, res) => {
        // query string
        nome = req.query.nome;
        res.json({ response: req.query, teste: nome });
    })
    .post("/devs", (req, res) => {

    })

module.exports = routes;