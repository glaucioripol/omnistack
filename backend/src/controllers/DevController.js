const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
    async store(req, res) {
        // desestruturação
        const { username } = req.body;

        //  buscar um no mongo
        const userExists = await Dev.findOne({ user: username});

        // se o usuario existe retorno ao inves de inserir.
        if (userExists){
            return res.json(userExists);
        }

        // response do axios esta em "response.data"
        const response = await axios.get(`https://api.github.com/users/${username}`);

        // pegando dados do github
        // com o : eu renomeio a variavel
        const { name, bio, avatar_url: avatar } = response.data;

        // cadastro no mongo
        const dev = await Dev.create({
            name , 
            username: username ,
            bio ,
            avatar 
        });

        return res.json({ ok: dev });
    }
}