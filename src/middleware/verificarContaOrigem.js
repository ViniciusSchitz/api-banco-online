const { contas } = require('../banco-de-dados/bancodedados');

const verificarContaOrigem = (req, res, next) => {
    const { numero_conta_origem } = req.body;

    const conta_origem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem)
    })

    if (!conta_origem) {
        return res.status(400).json({ "mensagem": "A conta de origem não existe!"});
    }

    next()
}

module.exports = verificarContaOrigem;