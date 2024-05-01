const { contas } = require('../banco-de-dados/bancodedados');

const verificarContaBancaria = (req, res, next) => {
    const { numero_conta } = req.body;

    if (!numero_conta) {
        return res.status(400).json({ "mensagem": "O número da conta é obrigatório!" });
    }

    const contaBancaria = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (!contaBancaria) {
        return res.status(400).json({ "mensagem": "A conta bancaria não existe!" });
    }

    next()
}

module.exports = verificarContaBancaria;