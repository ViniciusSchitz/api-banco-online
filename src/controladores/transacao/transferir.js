const { contas } = require('../../banco-de-dados/bancodedados');
const { transferencias } = require('../../banco-de-dados/bancodedados');
const { format } = require('date-fns');

const transferir = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor } = req.body;

    const conta_origem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem)
    })

    const conta_destino = contas.find((conta) => {
        return conta.numero === Number(numero_conta_destino)
    })

    conta_origem.saldo -= valor;
    conta_destino.saldo += valor;

    const formatacao = "yyy-MM-dd HH:mm:ss";
    const dataFormatada = format(new Date(), formatacao);

    const transferencia = {
        "data": dataFormatada,
        numero_conta_origem,
        numero_conta_destino,
        valor
    }
    
    transferencias.push(transferencia);

    return res.status(204).json()

};

module.exports = transferir;