const { contas } = require('../banco-de-dados/bancodedados')

const verificarCpfUnico = (req, res, next) => {
    const { cpf } = req.body;

    const verificarCPF = contas.find((conta) => {
        return conta.usuario.cpf === cpf
    })
    
    if (verificarCPF) {
        return res.status(400).json({"mensagem": "Já existe uma conta com o cpf informado!"})
    }

    next()
}

module.exports = verificarCpfUnico;