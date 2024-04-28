const { contas } = require('../banco-de-dados/bancodedados');

const saldo = (req, res) => {
    const { numero_conta, senha } = req.query;

    if (!numero_conta) {
        return res.status(400).json({ "mensagem": "O número da conta deve ser informada!"})
    }

    if (!senha) {
        return res.status(400).json({ "mensagem": "A senha da conta deve ser informada!"})
    }

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (!conta) {
        return res.status(400).json({ "mensagem": "A conta informada não existe!"})
    }

    if (conta.usuario.senha !== senha) {
        return res.status(400).json({ "mensagem": "A senha informada não está correta!"})
    }

    return res.status(200).json({ "saldo": conta.saldo})
}

module.exports = saldo;