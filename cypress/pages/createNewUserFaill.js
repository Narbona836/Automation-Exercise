import loginData from "../fixtures/loginData.json"
class CreateUser {
    selectors() {
        const seletores = {
        buttonCadastroLogin: "[href='/login']",
        campoCadastroNome: "[data-qa='signup-name']",
        campoCadastroEmail: "[data-qa='signup-email']",
        buttonCadastro: "[data-qa='signup-button']",
        mensagemErroEmailExistente: "[style='color: red;']"
        }
        return seletores;
    }
    iniciarCadastro() {
        cy.visit('/')
        cy.get(this.selectors().buttonCadastroLogin).click()
    }
    preencherCdastro() {
        cy.get(this.selectors().campoCadastroNome).type('Will test')
        cy.get(this.selectors().campoCadastroEmail).type(loginData.email)
        cy.get(this.selectors().buttonCadastro).click()
    }
    msgEmailInesistente() {
        cy.get(this.selectors().mensagemErroEmailExistente).should('be.visible')
    }
}

export default CreateUser 