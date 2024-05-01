const verificarSenhaBanco = (req, res, next) => {
    const { senha_banco } = req.query;

    if (!senha_banco) {
        res.status(400).json({ "mensagem": "A senha do banco deve ser informada !"})
    }
    
    if (senha_banco !== "Cubos123Bank") {
        res.status(400).json({ "mensagem": "A senha do banco está errada !"})
    }

    next()
}

module.exports = verificarSenhaBanco;