const { contas } = require('../banco-de-dados/bancodedados');

const verificarSaldoConta = (req, res, next) => {
    const numeroConta = Number(req.params.numeroConta);

    const conta = contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })

    if(conta.saldo > 0) {
        return res.status(400).json({ "mensagem": "A conta só pode ser removida se o saldo for zero!" });
    }

    next()
}

module.exports = verificarSaldoConta;