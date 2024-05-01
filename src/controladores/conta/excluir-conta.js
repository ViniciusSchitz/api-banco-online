let { contas } = require('../../banco-de-dados/bancodedados');

const excluirConta = (req, res) => {
    const numeroConta = Number(req.params.numeroConta);

    const indiceContaParaExcluir = contas.findIndex((conta) => {
        return conta.numero === Number(numeroConta)
    })

    contas = contas.splice(indiceContaParaExcluir, 1)[0];

    return res.status(204).json()
}

module.exports = excluirConta;