const { contas } = require('../banco-de-dados/bancodedados');
const { depositos } = require('../banco-de-dados/bancodedados');
const { format } = require('date-fns');

const depositar = (req, res) => {
    const { numero_conta, valor } = req.body;
    
    if (valor === 0 || valor < 0) {
        return res.status(400).json({ "mensagem": "Não é possivel depositar valores negativos ou zerados!" });
    }
    
    if (!valor) {
        return res.status(400).json({ "mensagem": "O valor é obrigatório!" });
    }


    if (!numero_conta) {
        return res.status(400).json({ "mensagem": "O número da conta é obrigatório!" });
    }
    
    const contaBancaria = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })
    
    if (!contaBancaria) {
        return res.status(400).json({ "mensagem": "A conta bancaria não existe!" });
    }
    

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