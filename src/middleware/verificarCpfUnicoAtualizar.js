const { contas } = require('../banco-de-dados/bancodedados');

const verificarCpfUnicoAtualizar = (req, res, next) => {
    const { cpf } = req.body;
    const verificarCPF = contas.find((conta) => {
        return conta.usuario.cpf === cpf
    })

    if (verificarCPF) {
        if (verificarCPF.numero !== numeroConta) {
            return res.status(400).json({ "mensagem": "O CPF informado já existe cadastrado!" })
        }
    }

    next()
}

module.exports = verificarCpfUnicoAtualizar;