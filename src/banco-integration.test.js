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

test("Deve listar todas as contas criadas", () => {
  const contas = bancoService.listAccounts();
  
  expect(contas.length).toBe(1);
  expect(contas).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ nome: "Lucas" }),
    ])
  );
});

// ATIVIDADE

test("Teste de nome obrigatorio",function(){
    const novaConta = bancoService.createAccount(null,2000,22)
    expect(novaConta).toBe("nome é obrigatório")
})

test("Teste de saldo negativo",function(){
    const novaConta = bancoService.createAccount("Lucas",-100,22)
    expect(novaConta).toBe("saldo inicial não pode ser negativo")
})

test("Test do nome ADMIN",function(){
    const novaConta = bancoService.createAccount("admin",2000,22)
    expect(novaConta).toBe("nome de usuário não pode ser admin")
})

test("Teste de idade minima",function(){
    const novaConta = bancoService.createAccount("Lucas",2000,17)
    expect(novaConta).toBe("idade mínima é 18 anos")
})

test("Teste de nome obrigatorio do GET",function(){
    const conta = bancoService.getAccountByName(null)
    expect(conta).toBe("nome é obrigatório")
})