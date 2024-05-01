const { contas } = require('../banco-de-dados/bancodedados');

const verificarContaDestino = (req, res, next) => {
    const { numero_conta_destino } = req.body;

    const conta_destino = contas.find((conta) => {
        return conta.numero === Number(numero_conta_destino)
    })

    if (!conta_destino) {
        return res.status(400).json({ "mensagem": "A conta de origem não existe!"});
    }

    next()
}

module.exports = verificarContaDestino;