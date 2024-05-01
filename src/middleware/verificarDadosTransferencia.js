const verificarDadosTransferencia = (req, res, next) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    if (!numero_conta_origem) {
        return res.status(400).json({ "mensagem": "A conta de origem não foi informada!"});
    }

    if (!numero_conta_destino) {
        return res.status(400).json({ "mensagem": "A conta de destino não foi informada!"});
    }

    if (!valor) {
        return res.status(400).json({ "mensagem": "O valor não foi informado!"});
    }

    if (!senha) {
        return res.status(400).json({ "mensagem": "A senha não foi informada!"});
    }

    next()
}

module.exports = verificarDadosTransferencia;