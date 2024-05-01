const express = require('express');

const listarContas = require('./controladores/conta/listar-contas');
const criarConta = require('./controladores/conta/criar-conta');
const atualizarUsuario = require('./controladores/conta/atualizar-usuario');
const excluirConta = require('./controladores/conta/excluir-conta');
const depositar = require('./controladores/transacao/depositar');
const sacar = require('./controladores/transacao/sacar');
const transferir = require('./controladores/transacao/transferir');
const saldo = require('./controladores/conta/saldo');
const extrato = require('./controladores/conta/extrato');

const verificarSenhaBanco = require('./middleware/verificarSenhaBanco');
const verificarDadosRequisicaoBody = require('./middleware/verificarDadosRequisicaoBody');
const verificarCpfUnico = require('./middleware/verificarCpfUnico');
const verificarEmailUnico = require('./middleware/verificarEmailUnico');
const verificarNumeroContaParametro = require('./middleware/verificarNumeroContaParametro');
const verificarCpfUnicoAtualizar = require('./middleware/verificarCpfUnicoAtualizar');
const verificarEmailUnicoAtualizar = require('./middleware/verificarEmailUnicoAtualizar');
const verificarSaldoConta = require('./middleware/verificarSaldoConta');
const verificarContaBancaria = require('./middleware/verificarContaBancaria');
const verificarSaldoParaDeposito = require('./middleware/verificarSaldoParaDeposito');
const verificarSaldoParaSaque = require('./middleware/verificarSaldoParaSaque');
const verificarSenhaBody = require('./middleware/verificarSenhaBody');
const verificarDadosTransferencia = require('./middleware/verificarDadosTransferencia');
const verificarContaOrigem = require('./middleware/verificarContaOrigem');
const verificarContaDestino = require('./middleware/verificarContaDestino');
const verificarValorTransferencia = require('./middleware/verificarValorTransferencia');
const verificarSenhaContaOrigem = require('./middleware/verificarSenhaContaOrigem');
const verificarDadosQuery = require('./middleware/verificarDadosQuery');
const verificarContaESenhaQuery = require('./middleware/verificarContaESenhaQuery');

const rotas = express();

rotas.get('/contas', verificarSenhaBanco, listarContas);
rotas.post('/contas', verificarDadosRequisicaoBody, verificarCpfUnico, verificarEmailUnico, criarConta);
rotas.put('/contas/:numeroConta/usuario', verificarDadosRequisicaoBody, verificarNumeroContaParametro, verificarCpfUnicoAtualizar, verificarEmailUnicoAtualizar, atualizarUsuario);
rotas.delete('/contas/:numeroConta', verificarNumeroContaParametro, verificarSaldoConta, excluirConta);
rotas.get('/contas/saldo', verificarDadosQuery, verificarContaESenhaQuery, saldo);
rotas.get('/contas/extrato', verificarDadosQuery, verificarContaESenhaQuery, extrato);

rotas.post('/transacoes/depositar', verificarContaBancaria, verificarSaldoParaDeposito, depositar);
rotas.post('/transacoes/sacar',verificarContaBancaria, verificarSaldoParaSaque, verificarSenhaBody, sacar);
rotas.post('/transacoes/transferir', verificarDadosTransferencia, verificarContaOrigem, verificarContaDestino, verificarValorTransferencia, verificarSenhaContaOrigem, transferir);

module.exports = rotas;