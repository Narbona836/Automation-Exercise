class LoginPages {

    get buttonFazerLogin() {
        return "[href='/login']"; 
    }

    get campoEmail() {
        return "[data-qa='login-email']"; 
    }

    get campoSenha() {
        return "[data-qa='login-password']"; 
    }

    get buttonLogin() {
        return "[data-qa='login-button']"; 
    }

    get buttonLogout() {
        return "[href='/logout']"; 
    }
    
    acessarLoginPage() {
        cy.visit("/")
    }
    fazerLogin(emailAleatorio, senhaAleatoria) {
        cy.get(this.buttonFazerLogin).click();
        cy.get(this.campoEmail).type(emailAleatorio);
        cy.get(this.campoSenha).type(senhaAleatoria);
        cy.get(this.buttonLogin).click();
    }
    fazerLogout() {
        cy.get(this.buttonLogout).click();
    }
    verificarLoginBemSucedido() {
        cy.get(this.buttonLogout).should('be.visible');
    }
    verificarLogoutBemSucedido() {
        cy.get(this.buttonFazerLogin).should('be.visible');
    }
    checkLoginInvalid() {
        cy.contains('Your email or password is incorrect!').should('be.visible')
    }
}

export default LoginPages