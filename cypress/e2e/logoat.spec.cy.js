import seletores from '../fixtures/loginPage.json'

describe('Logout', () => {
    let emailAleatorio;
    let senhaAleatoria;
    before(() => {
        cy.fixture('loginData.json').then((data) => {
            emailAleatorio = data.email;
            senhaAleatoria = data.senha; 
        });
    })
        beforeEach(() => {
        cy.visit('/')
        cy.get(seletores.buttonFazerLogin).click()
        cy.get(seletores.campoEmail).type(emailAleatorio)
        cy.get(seletores.campoSenha).type(senhaAleatoria)
        cy.get(seletores.buttonLogin).click()
        cy.get(seletores.buttonLogout).should('be.visible')
    })
    it('Deve realizar o logout com sucesso', () => {
        cy.get(seletores.buttonLogout).click()
        cy.get(seletores.buttonFazerLogin).should('be.visible')
        })
    })
