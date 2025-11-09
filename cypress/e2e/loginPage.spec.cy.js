import seletores from '../fixtures/loginPage.json'


const Chance = require('chance');
const chance = new Chance();

describe('Página de Login', () => {

  it('Deve realizar o login com sucesso', () => {
    cy.readFile('cypress/fixtures/loginData.json').then((data) => {
        const emailAleatorio = data.email;
        const senhaAleatoria = data.senha;
    cy.visit('/')
    cy.get(seletores.buttonFazerLogin).click()
    cy.get(seletores.campoEmail).type(emailAleatorio)
    cy.get(seletores.campoSenha).type(senhaAleatoria)
    cy.get(seletores.buttonLogin).click()
    cy.get(seletores.buttonLogout).should('be.visible')
    })
  })

  it('Deve exibir mensagem de erro ao tentar login com credenciais inválidas', () => {
    const emailInvalido = chance.email();
    const senhaInvalida = chance.string({ length: 8 });
    cy.visit('/')
    cy.get(seletores.buttonFazerLogin).click()
    cy.get(seletores.campoEmail).type(emailInvalido)
    cy.get(seletores.campoSenha).type(senhaInvalida)
    cy.get(seletores.buttonLogin).click()
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })
})