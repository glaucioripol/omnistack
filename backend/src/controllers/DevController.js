const axios = require("axios");
const Dev = require("../models/Dev");

// index lista todos usuarios
// show lista somente um
// store armazena usuario
module.exports = {
	async index(req, res) {
		// sempre definir user no header
		const { user } = req.headers;
		const loggedDev = await Dev.findById(user);
		// buscando no bd com filtros
		const users = await Dev.find({
			// junta filtros
			$and: [
				// $ne = not exists
				{ _id: { $ne: user } },
				// $nin = not in
				{ _id: { $nin: loggedDev.likes } },
			]
		});

		return res.send(users);
	},
	async store(req, res) {
		// desestruturação
		const { username } = req.body;

		//  buscar um no mongo
		const userExists = await Dev.findOne({ user: username });

		// se o usuario existe retorno ao inves de inserir.
		if (userExists) {
			return res.json(userExists);
		}

		// response do axios esta em "response.data"
		const response = await axios.get(`https://api.github.com/users/${username}`);

		// pegando dados do github
		// com o : eu renomeio a variavel
		const { name, bio, avatar_url: avatar } = response.data;

		// cadastro no mongo
		const dev = await Dev.create({
			name,
			username: username,
			bio,
			avatar
		});

		return res.json({ ok: dev });
	}
}