import { login } from "../utils/envVariaveis"

export function validaLogin(validaLoginIncorreto = false){
    if(!validaLoginIncorreto) {
        cy.get('[class="nav navbar-nav"]').find('a').as('navBar')
         .eq(9).should('contain.text', `Logged in as ${login.NAME}`)
    } else {
        cy.get('[class="login-form"]').find('p')
         .should('contain.text', 'Your email or password is incorrect!')
         .and('have.css', 'color', 'rgb(255, 0, 0)')
    }
}