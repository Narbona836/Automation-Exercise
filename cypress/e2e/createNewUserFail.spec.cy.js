import CreateUser from '../pages/createNewUserFaill'
import loginData from '../fixtures/loginData.json'

describe('Cadastro de usuario com e-mail existente', () => {
  const createUser = new CreateUser()
  it('Deve exibir mensagem de erro ao tentar cadastrar com e-mail existente', () => {
    createUser.iniciarCadastro()
    createUser.preencherCdastro(loginData.email)
    createUser.msgEmailInesistente() 
  })
})