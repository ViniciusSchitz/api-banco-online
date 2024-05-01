const { contas } = require('../../banco-de-dados/bancodedados');

const saldo = (req, res) => {
    const { numero_conta } = req.query;
    
    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    return res.status(200).json({ "saldo": conta.saldo})
}

module.exports = saldo;