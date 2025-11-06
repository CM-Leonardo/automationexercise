describe('Deve acessar a tela inicial e validar a exibição do botão home', () => {
  it('Successfully', () => {
    cy.visit('/')

    cy.get('[class="nav navbar-nav"]')
      .find('a')
      .eq(0)
      .contains('Home')
      .as('Home')

    cy.get('@Home').should('be.visible')
  })
})