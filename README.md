# PROJETO API DE BANCO ONLINE.

## O que é esse projeto?

O projeto é uma REST full API onde é possível:

- Criar conta bancária.
- Listar contas bancárias.
- Atualizar os dados do usuário da conta bancária.
- Excluir uma conta bancária.
- Depositar em uma conta bancária.
- Sacar de uma conta bancária.
- Transferir valores entre contas bancárias.
- Consultar saldo da conta bancária.
- Emitir extrato bancário.

## Como executar?

1 - No terminal, entre na pasta raiz do projeto;
2 - Dentro da pasta raiz, instale as bibliotecas usadas com o seguinte comando: `npm install`;
3 - E para rodar o projeto, use o seguinte comando: `npm run dev`;

# Rotas

http://localhost:3000/contas?senha_banco=Cubos123Bank - Para listar todas as contas existentes.
http://localhost:3000/contas - Para criar uma conta.
http://localhost:3000/contas/:numeroConta/usuario - Para atualizar os dados de uma conta.
http://localhost:3000/contas/:numeroConta - Para deletar uma conta.
http://localhost:3000/transacoes/depositar - Para efetuar um depósito em uma conta.
http://localhost:3000/transacoes/sacar - Para efetuar um saque de uma conta.
http://localhost:3000/transacoes/transferir - Para efetuar uma transferência de uma conta para outra.
http://localhost:3000/conta/saldo/numero_conta=123&senha=123 - Para emitir o saldo da conta.
http://localhost:3000/conta/extrato/numero_conta=123&senha=123 - Para emitir o extrato da conta.
