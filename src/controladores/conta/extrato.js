const { transferencias } = require('../../banco-de-dados/bancodedados');
const { depositos } = require('../../banco-de-dados/bancodedados');
const { saques } = require('../../banco-de-dados/bancodedados');

const extrato = (req, res) => {
    const { numero_conta } = req.query

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