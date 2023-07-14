describe('The internet app', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_theInternet'))
    })

    beforeEach(() => {
        cy.visit('/checkboxes')
    })

    it('Checkbox scenario', () => {
        cy.get('form#checkboxes input').eq(0).click({ force: true }).should('be.checked')
        cy.get('form#checkboxes input').eq(1).click().should('not.be.checked')
    })
})
