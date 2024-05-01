const { contas } = require('../../banco-de-dados/bancodedados')
let { numero } = require('../../banco-de-dados/bancodedados')

const criarConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    
    const conta = {
        numero: numero++,
        "saldo": 0,
        "usuario": {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    }

    contas.push(conta)

    return res.status(201).json()
}

module.exports = criarConta