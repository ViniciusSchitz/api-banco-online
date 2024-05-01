const { contas } = require('../banco-de-dados/bancodedados');

const verificarSaldoParaSaque = (req, res, next) => {
    const { numero_conta, valor } = req.body;

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (!valor) {
        return res.status(400).json({ "mensagem": "O valor deve ser informado para saque!" });
    }

    if (valor < 0) {
        return res.status(400).json({ "mensagem": "O valor não pode ser menor que zero!" });
    }

    if (conta.saldo < valor) {
        return res.status(400).json({ "mensagem": "Você não tem esse valor de saque!" });
    }

    next()
}

module.exports = verificarSaldoParaSaque;