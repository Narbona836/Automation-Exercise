import LoginPages from "../pages/loginPages";

describe('Logout', () => {
    const loginPages = new LoginPages()
    let dadosLogin;
    before(() => {
        cy.fixture('loginData.json').then((data) => {
            dadosLogin = data
        }); 
    })
    beforeEach(() => {
        loginPages.acessarLoginPage()
        loginPages.fazerLogin(dadosLogin.email, dadosLogin.senha);
        loginPages.verificarLoginBemSucedido()
    })
    it('Deve realizar o logout com sucesso', () => {
        loginPages.fazerLogout();
        loginPages.verificarLogoutBemSucedido();
        })
    })
