const { contas } = require('../banco-de-dados/bancodedados');

const verificarSenhaBody = (req, res, next) => {
    const { numero_conta, senha } = req.body;

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (!senha) {
        return res.status(400).json({ "mensagem": "A senha deve ser informada!" });
    }

    if (senha !== conta.usuario.senha) {
        return res.status(400).json({ "mensagem": "A senha informada está incorreta!" });
    }

    next()
}

module.exports = verificarSenhaBody;