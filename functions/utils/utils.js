//função para navegar nas paginas usando o cy.contains 
export function navigate(contains) { 
    cy.contains(contains)
      .should('be.visible')
      .click()
}