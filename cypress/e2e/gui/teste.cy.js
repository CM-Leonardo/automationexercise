describe('Deve acessar a tela inicial e validar a exibição do botão home', () => {
  it('Successfully', () => {
    cy.visit('/')

    cy.get('[class="nav navbar-nav"]')
      .find('a')
      .eq(0)
      .contains('Home')
      .as('HomeButton')

    cy.get('@HomeButton').should('be.visible')
  })

  it('Deve clicar no botão fazer login', () => {
    cy.visit('/')
    cy.get('[class="fa fa-lock"]').click()
    cy.url().should('includes', '/login')
  })
})