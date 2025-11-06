describe('Deve acessar a tela inicial e validar a exibição do botão home', () => {
  it('Successfully', () => {
    cy.visit('/')
    cy.get('[class="fa fa-home"]')
      .contains('Home')
      .should('be.visible')
  })
})