import LoginPages from '../pages/loginPages';

const Chance = require('chance');
const chance = new Chance();

describe('Página de Login', () => {
  const loginPage = new LoginPages() 

  it('Deve realizar o login com sucesso', () => {
    cy.readFile('cypress/fixtures/loginData.json').then((data) => {
      const emailAleatorio = data.email;
      const senhaAleatoria = data.senha;
      loginPage.acessarLoginPage()
      loginPage.fazerLogin(emailAleatorio, senhaAleatoria);
      loginPage.verificarLoginBemSucedido()
    })
  })

  it('Deve exibir mensagem de erro ao tentar login com credenciais inválidas', () => {
    const emailInvalido = chance.email();
    const senhaInvalida = chance.string({ length: 8 });
      loginPage.acessarLoginPage()
      loginPage.fazerLogin(emailInvalido, senhaInvalida);
      loginPage.checkLoginInvalid()
  })
})