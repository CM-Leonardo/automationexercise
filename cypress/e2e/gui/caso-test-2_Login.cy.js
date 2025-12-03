import { validaLogin } from '../../../functions/login/login'
import { contains, login, userData } from '../../../functions/utils/envVariaveis'
import { navigate } from '../../../functions/utils/utils'

describe('Deve validar a funcionalidade de login', () => {
  it('Deve fazer login no sistema com as credenciais validas', () => {
    cy.visit('/')

    cy.validaPaginaHome()
    navigate(contains.SIGNUP_LOGIN)

    //valida se a opção de login esta visivel
    cy.get('[class="login-form"]').find('h2').should('contain.text', 'Login to your account')

    //executa login
    cy.login()

    validaLogin()
  })

  context('Deve validar o login com email e senha incorretos', () => {
    it('Login com email incorreto', () => {
      cy.visit('/')

      cy.validaPaginaHome()
      navigate(contains.SIGNUP_LOGIN)

      cy.get('[class="login-form"]').find('h2').should('contain.text', 'Login to your account')

      cy.login('email@incorreto.com')
      validaLogin(true)
    })

    it('Login com senha incorreta', () => {
      cy.visit('/')

      cy.validaPaginaHome()
      navigate(contains.SIGNUP_LOGIN)

      cy.get('[class="login-form"]').find('h2').should('contain.text', 'Login to your account')

      cy.login(login.EMAIL, 'senhaInvalida')
      validaLogin(true)

    })
  })
})