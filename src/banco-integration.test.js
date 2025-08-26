const bancoService = require("./banco.service")

test("Deve criar uma conta com sucesso",function(){
    const novaConta = bancoService.createAccount("Lucas",2000)
    expect(novaConta.nome).toBe("Lucas")
    expect(novaConta.saldo).toBe(2000)
})

test("Deve reornar a conta pelo nome",function(){
    const conta = bancoService.getAccountByName("Lucas")
    expect(conta.nome).toBe('Lucas')
})