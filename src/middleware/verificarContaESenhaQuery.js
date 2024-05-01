const { contas } = require('../banco-de-dados/bancodedados');

const verificarContaESenhaQuery = (req, res, next) => {
    const { numero_conta, senha } = req.query;

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (!conta) {
        return res.status(400).json({ "mensagem": "A conta informada não existe!"})
    }

    if (conta.usuario.senha !== senha) {
        return res.status(400).json({ "mensagem": "A senha informada não está correta!"})
    }

    next()
}

module.exports = verificarContaESenhaQuery;