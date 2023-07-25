describe('Custom Commands Basics', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.visit('/login')
    })

    it('Success Login Scenario', () => {
        cy.login('test123', '271gR46@0Nal')
        cy.url().should('contain', '/profile')
    })

    it('Wrong User Login Scenario', () => {
        cy.login('wrongUser', 'wrongPassword123')
        cy.url().should('not.contain', '/profile')
    })
})
