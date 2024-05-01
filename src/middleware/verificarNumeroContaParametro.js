const { contas } = require('../banco-de-dados/bancodedados');

const verificarNumeroContaParametro = (req, res, next) => {
    const numeroConta = Number(req.params.numeroConta);

    if (isNaN(numeroConta)) {
        return res.status(400).json({ "mensagem": "O número da conta informado não é válido." });
    }

    const conta = contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })

    if (!conta) {
        return res.status(400).json({ "mensagem": "Não existe conta com esse número. "})
    }

    next()
}

module.exports = verificarNumeroContaParametro;