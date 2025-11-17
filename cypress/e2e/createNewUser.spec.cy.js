import CreateNewUser from '../pages/createNewUser';

const Chance = require('chance');
const chance = new Chance();

describe('Cadastro de Usuário', () => {
  const createNewUser = new CreateNewUser()
  let emailAleatorio = chance.email()
  let senhaAleatoria = chance.string({ length: 8 })

  before(() => {
        emailAleatorio = chance.email();
        senhaAleatoria = chance.string({ length: 8, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' }); 

        cy.writeFile('cypress/fixtures/loginData.json', { 
            email: emailAleatorio, 
            senha: senhaAleatoria 
        });
    });
  it('Deve realizar o cadastro de usuario com sucesso', () => {
    createNewUser.acessarLoginPage()
    createNewUser.cadastrarUsuario()
    createNewUser.iniciarCadastro(emailAleatorio)
    createNewUser.infoConta(senhaAleatoria)
    createNewUser.infoEndereco()
    createNewUser.addConta()
            cy.fixture('loginData.json').then((data) => {
            expect(data.email).to.equal(emailAleatorio);
        });
  })
})