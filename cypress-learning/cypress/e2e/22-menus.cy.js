describe('Menu', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.visit('/menu#')
    })

    it('Menu demo', () => {
        cy.get('a').contains('Main Item 2').realHover()
        cy.contains('a', 'SUB SUB LIST »').realHover()
        cy.contains('ul > li > a', 'Sub Sub Item 1').should('be.visible')
        cy.contains('ul > li > a', 'Sub Sub Item 2').should('be.visible')
    })
})
