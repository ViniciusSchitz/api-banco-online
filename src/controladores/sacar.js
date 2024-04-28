const { contas } = require('../banco-de-dados/bancodedados');
const { saques } = require('../banco-de-dados/bancodedados');
const { format } = require('date-fns');

const sacar = (req, res) => {
    const { numero_conta, valor, senha } = req.body;

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (!conta) {
        return res.status(400).json({ "mensagem": "Aconta informada não existe!"});
    }
    
    if (!valor) {
        return res.status(400).json({ "mensagem": "O valor deve ser informado para saque!" });
    }

    if (valor < 0) {
        return res.status(400).json({ "mensagem": "O valor não pode ser menor que zero!" });
    }

    if (conta.saldo < valor) {
        return res.status(400).json({ "mensagem": "Você não tem esse valor de saque!" });
    }

    if (!senha) {
        return res.status(400).json({ "mensagem": "A senha deve ser informada!" });
    }

    if (senha !== conta.usuario.senha) {
        return res.status(400).json({ "mensagem": "A senha informada está incorreta!" });
    }
    
    conta.saldo -= valor;

    const formatacao = "yyy-MM-dd HH:mm:ss";
    const data = format(new Date(), formatacao);
    
    const saque = {
        data,
        numero_conta,
        valor
    }

    saques.push(saque);

    return res.status(204).json()
}

module.exports = sacar;