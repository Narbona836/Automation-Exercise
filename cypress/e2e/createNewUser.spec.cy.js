import seletores from '../fixtures/createNewUser.json'

const Chance = require('chance');
const chance = new Chance();

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get(seletores.buttonCadastroLogin).click()
    cy.get(seletores.campoCadastroNome).type('Will test')
    cy.get(seletores.campoCadastroEmail).type(chance.email())
    cy.get(seletores.buttonCadastro).click()
    cy.get(seletores.radioSr).eq(0).click()
    cy.get(seletores.campoSenha).type('12345')
    cy.get(seletores.campoDia).select('7')
    cy.get(seletores.campoMes).select('November')
    cy.get(seletores.campoAno).select('2021')
    cy.get(seletores.campoNome).type('Will')
    cy.get(seletores.campoSobrenome).type('Test')
    cy.get(seletores.campoEmpresa).type('Cypress')
    cy.get(seletores.campoEndereco1).type('enderecotest')
    cy.get(seletores.campoEndereco2).type('enderecotest2')
    cy.get(seletores.campoPais).select('Canada')
    cy.get(seletores.campoEstado).type('CA')
    cy.get(seletores.campoCidade).type('Los Angeles')
    cy.get(seletores.campoCep).type('90001')
    cy.get(seletores.campoNumeroTelefone).type('1234567890')
    cy.get(seletores.buttonCriarConta).click()
    cy.get(seletores.buttonContinuar).click()
  })
})