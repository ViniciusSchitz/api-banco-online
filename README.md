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

- No terminal, entre na pasta raiz do projeto.
- Dentro da pasta raiz, instale as bibliotecas usadas com o seguinte comando: `npm install`.
- E para rodar o projeto, use o seguinte comando: `npm run dev`.

# Rotas

- http://localhost:3000/contas?senha_banco=Cubos123Bank - Para listar todas as contas existentes.
- http://localhost:3000/contas - Para criar uma conta.
- http://localhost:3000/contas/:numeroConta/usuario - Para atualizar os dados de uma conta.
- http://localhost:3000/contas/:numeroConta - Para deletar uma conta.
- http://localhost:3000/transacoes/depositar - Para efetuar um depósito em uma conta.
- http://localhost:3000/transacoes/sacar - Para efetuar um saque de uma conta.
- http://localhost:3000/transacoes/transferir - Para efetuar uma transferência de uma conta para outra.
- http://localhost:3000/conta/saldo/numero_conta=123&senha=123 - Para emitir o saldo da conta.
- http://localhost:3000/conta/extrato/numero_conta=123&senha=123 - Para emitir o extrato da conta.

# Ilustrações

### Requisição para criar a conta

<div align="centr">
<img src="https://github.com/ViniciusSchitz/api-banco-online/assets/90482395/795a5688-77c0-4e68-a434-798450e0ff34" width="300px">
<div/>

### Requisição de saque

<div align="centr">
<img src="https://github.com/ViniciusSchitz/api-banco-online/assets/90482395/836b35a4-d802-45e5-b281-2b4c04748ca5" width="300px">
<div/>

### Requisição de transferência

<div align="centr">
<img src="https://github.com/ViniciusSchitz/api-banco-online/assets/90482395/0f349de6-1e70-4e0c-82da-75bd182ab9d7" width="300px">
<div/>
