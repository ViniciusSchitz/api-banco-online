const { contas } = require('../../banco-de-dados/bancodedados');
const { depositos } = require('../../banco-de-dados/bancodedados');
const { format } = require('date-fns');

const depositar = (req, res) => {
    const { numero_conta, valor } = req.body;

    const contaBancaria = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    contaBancaria.saldo += valor;

    const formatacao = "yyy-MM-dd HH:mm:ss";
    const dataFormatada = format(new Date(), formatacao);

    const deposito = {
        "data": dataFormatada,
        numero_conta,
        valor
    }

    depositos.push(deposito)

    return res.status(204).json()
}

module.exports = depositar;