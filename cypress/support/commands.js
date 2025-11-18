Cypress.Commands.add('validaPaginaHome', () => {
  cy.get('[class="col-sm-6"]').as('headers')
    .find('h1').eq(0).should('contain.text', 'AutomationExercise')
  cy.get('@headers')
    .find('h2').eq(0).should('contain.text', 'Full-Fledged practice website for Automation Engineers')
})

Cypress.Commands.add('cadastroUsuario', (data) => {
  //informações iniciais
  cy.get('[data-qa="signup-name"]').type(data.nameUser)
  cy.get('[data-qa="signup-email"]').type(data.emailUser)
  cy.get('[data-qa="signup-button"]').should('be.visible').click()

  //preenchimento de sexo e senha
  cy.get('#id_gender1').check()
  cy.get('[data-qa="password"]').type(data.password)

  //informações de nascimento
  cy.get('#days').select(10)
  cy.get('#months').select(10)
  cy.get('#years').select(31)

  //marca todos os check e valida
  cy.get('div input[type="checkbox"]')
    .as('allCheck')
    .check()
  cy.get('@allCheck')
    .each(checkbox => {
      expect(checkbox[0].checked).to.equal(true)
    })

  //preenche informações do usuário como nome, sobrenome, residencia...
  cy.get('[data-qa="first_name"]').type(data.firstName)
  cy.get('[data-qa="last_name"]').type(data.lastName)
  cy.get('[data-qa="company"]').type(data.company)
  cy.get('[data-qa="address"]').type(data.adressOne)
  cy.get('[data-qa="address2"]').type(data.adressTwo)
  cy.get('#country').select(6)
  cy.get('[data-qa="state"]').type(data.state)
  cy.get('[data-qa="city"]').type(data.city)
  cy.get('[data-qa="zipcode"]').type(data.zipCode)
  cy.get('[data-qa="mobile_number"]').type(data.mobileNumber)

  //clica em salvar
  cy.get('[data-qa="create-account"]')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('validaUsuarioLogado', (data) => {
  cy.get('[class="nav navbar-nav"]').find('a').as('navBar')
    .eq(9).should('contain.text', `Logged in as ${data.nameUser}`)
})

Cypress.Commands.add('validaCriacaoUsuario', () => {
  cy.url().should('includes', '/account_created')
  cy.get('[data-qa="account-created"]').as('accountCreat')
    .should('have.attr', 'style').and('contain', 'green')
  cy.get('@accountCreat').should('contain.text', 'Account Created!')
})

Cypress.Commands.add('validaExclusaoUsuario', () => {
  cy.url().should('includes', '/delete_account')
  cy.get('[data-qa="account-deleted"]').as('accountDeleted')
    .should('have.attr', 'style').and('contain', 'green')
  cy.get('@accountDeleted').should('contain.text', 'Account Deleted!')
})