const { contas } = require('../../banco-de-dados/bancodedados')

const atualizarUsuario = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    const numeroConta = Number(req.params.numeroConta)

    const conta = contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })
    
    
    conta.usuario.nome = nome;
    conta.usuario.cpf = cpf;
    conta.usuario.data_nascimento = data_nascimento;
    conta.usuario.telefone = telefone;
    conta.usuario.email = email;
    conta.usuario.senha = senha;

    return res.status(204).json()
    
}

module.exports = atualizarUsuario