const { contas } = require('../banco-de-dados/bancodedados')

const atualizarUsuario = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    const numeroConta = Number(req.params.numeroConta);

    if (isNaN(numeroConta)) {
        return res.status(400).json({ "mensagem": "A conta com o número informado não existe." });
    }

    const conta = contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })

    if (!conta) {
        return res.status(400).json({ "mensagem": "Não existe conta com esse número. "})
    }

    if (!nome) {
        return res.status(400).json({ "mensagem": "O nome deve ser informado!" })
    }

    if (!cpf) {
        return res.status(400).json({ "mensagem": "O cpf deve ser informado!" })
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

    if (!senha) {
        return res.status(400).json({ "mensagem": "A senha deve ser informado!" })
    }

    const verificarCPF = contas.find((conta) => {
        return conta.usuario.cpf === cpf
    })

    if (verificarCPF) {
        if (verificarCPF.numero !== numeroConta) {
            return res.status(400).json({ "mensagem": "O CPF informado já existe cadastrado!" })
        }
    }

    const verificarEmail = contas.find((conta) => {
        return conta.usuario.email === email
    })

    if (verificarEmail) {
        if (verificarEmail.numero !== numeroConta) {
            return res.status(400).json({ "mensagem": "O email informado já existe cadastrado!" })
        }
    }
    
    
    conta.usuario.nome = nome;
    conta.usuario.cpf = cpf;
    conta.usuario.data_nascimento = data_nascimento;
    conta.usuario.telefone = telefone;
    conta.usuario.email = email;
    conta.usuario.senha = senha;

    return res.status(204).json()
    
}

module.exports = atualizarUsuario