describe('Tooltips', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.visit('/tool-tips')
    })

    it('Tooltip button', () => {
        cy.get('#toolTipButton').trigger('mouseover') // hover mouse
        cy.get('div[role="tooltip"]').should(
            'have.text',
            'You hovered over the Button'
        )
    })
    it('A tag tooltip', () => {
        cy.contains('a', 'Contrary').trigger('mouseover') // hover mouse
        cy.get('.tooltip-inner').should(
            'have.text',
            'You hovered over the Contrary'
        )
    })
})
