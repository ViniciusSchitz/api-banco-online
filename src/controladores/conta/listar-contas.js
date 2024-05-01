const { contas } = require('../../banco-de-dados/bancodedados')

const listarContas = (req, res) => {
    return res.status(200).json(contas)
}

module.exports = listarContas