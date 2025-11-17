class CreateNewUser {
    selectors() {
        const seletores = {
        buttonCadastroLogin: "[href='/login']",
        campoCadastroNome: "[data-qa='signup-name']",
        campoCadastroEmail: "[data-qa='signup-email']",
        buttonCadastro: "[data-qa='signup-button']",
        radioSr:"[data-qa='title']",
        campoSenha:"[data-qa='password']",
        campoDia: "[data-qa='days']",
        campoMes: "[data-qa='months']",
        campoAno: "[data-qa='years']",
        campoNome:"[data-qa='first_name']",
        campoSobrenome:"[data-qa='last_name']",
        campoEmpresa:"[data-qa='company']",
        campoEndereco1:"[data-qa='address']",
        campoEndereco2:"[data-qa='address2']",
        campoPais:"[data-qa='country']",
        campoEstado:"[data-qa='state']",
        campoCidade:"[data-qa='city']",
        campoCep:"[data-qa='zipcode']",
        campoNumeroTelefone:"[data-qa='mobile_number']",
        buttonCriarConta:"[data-qa='create-account']",
        buttonContinuar:"[data-qa='continue-button']",
        buttonLogout:"[href='/logout']"
        }
        return seletores;
    }
    acessarLoginPage() {
        cy.visit('/') 
    }
    cadastrarUsuario() {
        cy.get(this.selectors().buttonCadastroLogin).click()
    }
    iniciarCadastro(emailAleatorio) {
        cy.get(this.selectors().campoCadastroNome).type('Will test')
        cy.get(this.selectors().campoCadastroEmail).type(emailAleatorio)
        cy.get(this.selectors().buttonCadastro).click()
    }
    infoConta(senhaAleatoria) {
        cy.get(this.selectors().radioSr).eq(0).click()
        cy.get(this.selectors().campoSenha).type(senhaAleatoria)
        cy.get(this.selectors().campoDia).select('7')
        cy.get(this.selectors().campoMes).select('November')
        cy.get(this.selectors().campoAno).select('2021')
    }
    infoEndereco() {
        cy.get(this.selectors().campoNome).type('Will')
        cy.get(this.selectors().campoSobrenome).type('Test')
        cy.get(this.selectors().campoEmpresa).type('Cypress')
        cy.get(this.selectors().campoEndereco1).type('enderecotest')
        cy.get(this.selectors().campoEndereco2).type('enderecotest2')
        cy.get(this.selectors().campoPais).select('Canada')
        cy.get(this.selectors().campoEstado).type('CA')
        cy.get(this.selectors().campoCidade).type('Los Angeles')
        cy.get(this.selectors().campoCep).type('90001')
        cy.get(this.selectors().campoNumeroTelefone).type('1234567890')
    }
    addConta() {
        cy.get(this.selectors().buttonCriarConta).click()
        cy.get(this.selectors().buttonContinuar).click()
        cy.get(this.selectors().buttonLogout).should('be.visible')
    }
}

export default CreateNewUser;