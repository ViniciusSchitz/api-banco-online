const verificarDadosQuery = (req, res, next) => {
    const { numero_conta, senha } = req.query;

    if (!numero_conta) {
        return res.status(400).json({ "mensagem": "O número da conta deve ser informada!"})
    }

    if (!senha) {
        return res.status(400).json({ "mensagem": "A senha da conta deve ser informada!"})
    }

    next()
}

module.exports = verificarDadosQuery;