const { contas } = require('../banco-de-dados/bancodedados')
let { numero } = require('../banco-de-dados/bancodedados')

const criarConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome) {
        return res.status(400).json({ "mensagem": "O nome deve ser informado!" })
    }

    if (!cpf) {
        return res.status(400).json({ "mensagem": "O cpf deve ser informado!" })
    }

    const verificarCPF = contas.find((conta) => {
        return conta.usuario.cpf === cpf
    })

    if (verificarCPF) {
        return res.status(400).json({"mensagem": "Já existe uma conta com o cpf informado!"})
    }    
    
    if (!data_nascimento) {
        return res.status(400).json({ "mensagem": "A data de nascimento deve ser informado!" })
    }
    
    if (!telefone) {
        return res.status(400).json({ "mensagem": "O telefone deve ser informado!" })
    }
    
    if (!email) {
        return res.status(400).json({ "mensagem": "O email deve ser informado!" })
    }

    const verificarEmail = contas.find((conta) => {
        return conta.usuario.email === email
    })
    
    if (verificarEmail) {
        return res.status(400).json({"mensagem": "Já existe uma conta com o e-mail informado!"})
    }

    if (!senha) {
        return res.status(400).json({ "mensagem": "A senha deve ser informado!" })
    }

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