import { LoginPage } from './page_objects/Login'
import { ProfilePage } from './page_objects/Profile'

describe('POM Page Object Model example', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
        Cypress.session.clearAllSavedSessions()
    })
    beforeEach(() => {
        LoginPage.visit()
    })

    it('Success Login Scenario', () => {
        // -- without page object model --
        // cy.get('#userName').type('test123')
        // cy.get('#password').type('271gR46@0Nal')
        // cy.get('#login').click()

        // -- with page object model --
        // LoginPage.submitLogin('test123', '271gR46@0Nal')

        LoginPage.usernameElement.type('test123')
        LoginPage.passwordElement.type('271gR46@0Nal')
        LoginPage.loginElement.click()

        cy.url().should('contain', '/profile')

        // cy.get('#userName-value').should('have.text', 'test123')
        ProfilePage.userElement.should('have.text', 'test123')
        ProfilePage.headerElement.should('have.text', 'Profile')
    })

    it('Wrong User Login Scenario', () => {
        LoginPage.submitLogin('wrongUser', 'wrongPassword')
        LoginPage.invalidLoginMsgElement
            .should('exist')
            .and('have.text', 'Invalid username or password!')

        cy.url().should('not.contain', '/profile')

        ProfilePage.headerElement.should('have.text', 'Login')
    })
})
