const { contas } = require('../banco-de-dados/bancodedados')

const verificarEmailUnico = (req, res, next) => {
    const { email } = req.body;
    
    const verificarEmail = contas.find((conta) => {
        return conta.usuario.email === email
    })
    
    if (verificarEmail) {
        return res.status(400).json({"mensagem": "Já existe uma conta com o e-mail informado!"})
    }

    next()
}

module.exports = verificarEmailUnico;