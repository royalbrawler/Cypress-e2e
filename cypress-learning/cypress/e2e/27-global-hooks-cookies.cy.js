Cypress.session.clearAllSavedSessions()

describe('Global Hooks example', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.log('This is a Local beforeEach Hook')
        cy.visit('/login')
    })
    it('Check cookies', () => {
        cy.getCookies().should('have.length.above', 0)
    })
    after(() => {
        cy.log('This is a Local after Hook')
    })
})
