const { contas } = require('../banco-de-dados/bancodedados');

const verificarValorTransferencia = (req, res, next) => {
    const { numero_conta_origem, valor } = req.body;

    const conta_origem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem)
    })

    if (valor > conta_origem.saldo) {
        return res.status(400).json({ "mensagem": "Saldo insuficiente!"});
    }

    next()
}

module.exports = verificarValorTransferencia;