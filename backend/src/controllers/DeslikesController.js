const Dev = require("../models/Dev");

module.exports = {
    async store(req, res) {
        // pegar parametro ns url : req.params.
        const { devId } = req.params;
        // pegando header : req.headers.
        const { user } = req.headers;
        // achando usuario logado
        const loggedDev = await Dev.findById(user);
        // usuario que foi curtido
        const targetDev = await Dev.findById(devId);

        // validando se o usuario não existe.
        if (!targetDev) {
            // retorno um 400
            return res.status(400).json({ error: "Dev not exists" });
        }

        // usando o usuario no mongo
        loggedDev.deslikes.push(targetDev._id);
        // salvando no mongo
        await loggedDev.save();

        return res.json({ ok: loggedDev });
    }
}