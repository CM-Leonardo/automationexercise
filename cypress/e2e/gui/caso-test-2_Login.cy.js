import { loginData } from '../../../functions/envVariaveis'

describe('Deve validar a funcionalidade de login', () => {
  it('Deve fazer login no sistema com as credenciais validas', () => {
    cy.visit('/')

    cy.validaPaginaHome()

    cy.contains('Signup / Login')
      .should('be.visible')
      .click()

    //valida se a opção de login esta visivel
    cy.get('[class="login-form"]').find('h2').should('contain.text', 'Login to your account')

    //executa login
    cy.login(loginData)

    cy.validaUsuarioLogado(loginData)
  })
})