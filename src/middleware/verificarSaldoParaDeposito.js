const verificarSaldoParaDeposito = (req, res, next) => {
    const { valor } = req.body;
    
    if (valor === 0 || valor < 0) {
        return res.status(400).json({ "mensagem": "Não é possivel depositar valores negativos ou zerados!" });
    }
    
    if (!valor) {
        return res.status(400).json({ "mensagem": "O valor é obrigatório!" });
    }

    next()
}

module.exports = verificarSaldoParaDeposito;