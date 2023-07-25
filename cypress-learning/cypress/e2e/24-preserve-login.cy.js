describe('Preserve Login demoQA', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
        Cypress.session.clearAllSavedSessions()
    })
    beforeEach(() => {
        cy.session('mySession', () => {
            cy.visit('/login')
            cy.get('#userName').type('test123')
            cy.get('#password').type('271gR46@0Nal')
            cy.get('#login').click()
            cy.url().should('contain', '/profile')
        })
    })

    it('Check if session was saved', () => {
        cy.visit('/login')
        cy.get('#loading-label').should(
            'have.text',
            'You are already logged in. View your profile.'
        )
    })

    it('Check if session was saved', () => {
        cy.visit('/login')
        cy.get('#loading-label').should(
            'have.text',
            'You are already logged in. View your profile.'
        )
    })
})
