const { contas } = require('../../banco-de-dados/bancodedados');
const { saques } = require('../../banco-de-dados/bancodedados');
const { format } = require('date-fns');

const sacar = (req, res) => {
    const { numero_conta, valor, } = req.body;

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    conta.saldo -= valor;

    const formatacao = "yyy-MM-dd HH:mm:ss";
    const data = format(new Date(), formatacao);
    
    const saque = {
        data,
        numero_conta,
        valor
    }

    saques.push(saque);

    return res.status(204).json()
}

module.exports = sacar;