const express = require('express');

const listarContas = require('./controladores/listar-contas');
const criarConta = require('./controladores/criar-conta');
const atualizarUsuario = require('./controladores/atualizar-usuario');
const excluirConta = require('./controladores/excluir-conta');
const depositar = require('./controladores/depositar');
const sacar = require('./controladores/sacar');
const transferir = require('./controladores/transferir');
const saldo = require('./controladores/saldo');
const extrato = require('./controladores/extrato');

const rotas = express();

rotas.get('/contas', listarContas);
rotas.post('/contas', criarConta);
rotas.put('/contas/:numeroConta/usuario', atualizarUsuario);
rotas.delete('/contas/:numeroConta', excluirConta);
rotas.get('/contas/saldo', saldo);
rotas.get('/contas/extrato', extrato);

rotas.post('/transacoes/depositar', depositar);
rotas.post('/transacoes/sacar', sacar);
rotas.post('/transacoes/transferir', transferir);

module.exports = rotas