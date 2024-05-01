const { contas } = require('../banco-de-dados/bancodedados');

const verificarSenhaContaOrigem = (req, res, next) => {
    const { numero_conta_origem, senha } = req.body;

    const conta_origem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem)
    })

    if (senha !== conta_origem.usuario.senha) {
        return res.status(400).json({ "mensagem": "A senha da conta origem está errada!"});
    }

    next()
}

module.exports = verificarSenhaContaOrigem;