const { contas } = require('../banco-de-dados/bancodedados');

const verificarEmailUnicoAtualizar = (req, res, next) => {
    const { email } = req.body;

    const verificarEmail = contas.find((conta) => {
        return conta.usuario.email === email
    })

    if (verificarEmail) {
        if (verificarEmail.numero !== numeroConta) {
            return res.status(400).json({ "mensagem": "O email informado já existe cadastrado!" })
        }
    }

    next()
}

module.exports = verificarEmailUnicoAtualizar;