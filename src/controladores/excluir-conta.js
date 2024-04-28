let { contas } = require('../banco-de-dados/bancodedados');

const excluirConta = (req, res) => {
    const numeroConta = Number(req.params.numeroConta);

    if (isNaN(numeroConta)) {
        return res.status(400).json({ "mensagem": "O número da conta não é válido!" });
    }
    
    const contaEncontrada = contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })
    
    if (!contaEncontrada) {
        return res.status(404).json({ "mensagem": "A conta informada não existe!" });
    }

    if(contaEncontrada.saldo > 0) {
        return res.status(400).json({ "mensagem": "A conta só pode ser removida se o saldo for zero!" });
    }

    const indiceContaParaExcluir = contas.findIndex((conta) => {
        return conta.numero === Number(numeroConta)
    })

    contas = contas.splice(indiceContaParaExcluir, 1)[0];

    return res.status(204).json()
}

module.exports = excluirConta;