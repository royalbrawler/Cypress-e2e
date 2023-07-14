describe('cy.viewport() demo', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('device name', () => {
        cy.get('.navbar-toggler').should('not.be.visible')
        cy.viewport('iphone-6')
        cy.get('.navbar-toggler').should('be.visible')
    })
    it('specific viewport', () => {
        cy.get('.navbar-toggler').should('not.be.visible')
        cy.viewport(700, 600)
        cy.get('.navbar-toggler').should('be.visible')
    })
})
