const bancoModel = require('./banco.model')

function createAccount(nome, saldoInicial){
    return bancoModel.criarConta(nome, saldoInicial)
}

function getAccountByName(nome){
    return bancoModel.buscarContaPorNome(nome)
}

function listAccounts(){
    return bancoModel.listarContas()
}

module.exports = {
  createAccount,
  getAccountByName,
    listAccounts
}