const { contas } = require('../banco-de-dados/bancodedados');
const { transferencias } = require('../banco-de-dados/bancodedados');
const { depositos } = require('../banco-de-dados/bancodedados');
const { saques } = require('../banco-de-dados/bancodedados');

const extrato = (req, res) => {
    const { numero_conta, senha } = req.query

    if (!numero_conta) {
        return res.status(400).json({"mensagem": "O número da conta não foi informado!"});
    }

    if (!senha) {
        return res.status(400).json({"mensagem": "A senha da conta não foi informada!"});
    }

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta);
    })

    if (!conta) {
        return res.status(400).json({"mensagem": "Conta bancária não encontada!"});
    }

    if (conta.usuario.senha !== senha) {
        return res.status(400).json({"mensagem": "A senha informada está incorreta!"});
    }

    const depositosRealizados = depositos.filter((deposito) => {
        return Number(deposito.numero_conta) === Number(numero_conta)
    })
    
    const saquesRealizados = saques.filter((saque) => {
        return Number(saque.numero_conta) === Number(numero_conta)
    })
    
    const transferenciasEnviadas = transferencias.filter((transferencia) => {
        return Number(transferencia.numero_conta_origem) === Number(numero_conta)
    })

    const transferenciasRecebidas = transferencias.filter((transferencia) => {
        return Number(transferencia.numero_conta_destino) === Number(numero_conta)
    })

    const extratoBancario = {
        "depositos": depositosRealizados,
        "saques": saquesRealizados,
        transferenciasEnviadas,
        transferenciasRecebidas
    }

    return res.status(200).json(extratoBancario)

}

module.exports = extrato