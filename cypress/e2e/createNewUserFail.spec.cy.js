import seletores from '../fixtures/createNewUserFail.json'
import loginData from '../fixtures/loginData.json'

describe('Cadastro de usuario com e-mail existente', () => {
  it('Deve exibir mensagem de erro ao tentar cadastrar com e-mail existente', () => {
    cy.visit('/')
    cy.get(seletores.buttonCadastroLogin).click()
    cy.get(seletores.campoCadastroNome).type('Will test')
    cy.get(seletores.campoCadastroEmail).type(loginData.email)
    cy.get(seletores.buttonCadastro).click()
    cy.get(seletores.mensagemErroEmailExistente).should('be.visible')
    
  })
})