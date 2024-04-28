const { contas } = require('../banco-de-dados/bancodedados');
const { transferencias } = require('../banco-de-dados/bancodedados');
const { format } = require('date-fns');

const transferir = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    if (!numero_conta_origem) {
        return res.status(400).json({ "mensagem": "A conta de origem não foi informada!"});
    }

    if (!numero_conta_destino) {
        return res.status(400).json({ "mensagem": "A conta de destino não foi informada!"});
    }

    if (!valor) {
        return res.status(400).json({ "mensagem": "O valor não foi informado!"});
    }

    if (!senha) {
        return res.status(400).json({ "mensagem": "A senha não foi informada!"});
    }

    const conta_origem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem)
    })

    const conta_destino = contas.find((conta) => {
        return conta.numero === Number(numero_conta_destino)
    })

    if (!conta_origem && !conta_destino) {
        return res.status(400).json({ "mensagem": "A conta de origem ou de destino não existe!"});
    }

    if (senha !== conta_origem.usuario.senha) {
        return res.status(400).json({ "mensagem": "A senha da conta origem está errada!"});
    }

    if(valor > conta_origem.saldo) {
        return res.status(400).json({ "mensagem": "Saldo insuficiente!"});
    }

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