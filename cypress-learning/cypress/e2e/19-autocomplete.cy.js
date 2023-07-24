describe('Autocomplete', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.visit('/auto-complete')
    })

    it('Autocomplete demo using Yellow', () => {
        cy.get('.auto-complete__value-container').first().type('Y')
        cy.contains('#react-select-2-option-0', 'Yellow').click()
        cy.get('.auto-complete__multi-value__label').should('have.text', 'Yellow')
    })
})
