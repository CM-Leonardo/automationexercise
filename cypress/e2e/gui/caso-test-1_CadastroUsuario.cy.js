
import { userData } from '../../../functions/envVariaveis'

describe('Cadastro de usuário', () => {
  it('Deve fazer o cadastro de usuário com informações validas', () => {
    cy.visit('/')

    //Valida exibição da pagina inicial
    cy.validaPaginaHome()

    //Valida/seleciona botão de login/sinup
    cy.contains('Signup / Login')
      .should('be.visible')
      .click()

    //valida estado da url pagina de LOGIN
    cy.url().should('include', '/login')

    //preenche informações iniciais de login
    cy.get('[class="signup-form"]').should('contains.text', 'New User Signup!')
    cy.cadastroUsuario(userData)

    //valida mensagem de criação de usuário com sucesso
    cy.validaCriacaoUsuario()

    //clica no botão continuar e validando se o usuário esta logado
    cy.get('[data-qa="continue-button"]').should('be.visible').click()
    cy.validaUsuarioLogado(userData)

    //clica no botão de excluir usuário
    //cy.get('@navBar').should('be.visible').eq(4).click()
    cy.contains('Delete Account')
      .should('be.visible')
      .click()

    //excluindo a conta criada
    cy.validaExclusaoUsuario()
  })
})


