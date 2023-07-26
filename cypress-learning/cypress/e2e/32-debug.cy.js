describe('Basics', () => {
    beforeEach(() => {
        cy.visit('/click')
    })

    it('Debug', () => {
        cy.get('#badButton').debug().click()
        cy.get('#badButton').should('have.class', 'btn-success')
    })
    it('Pause', () => {
        cy.pause()
        cy.get('#badButton').click()
        cy.pause()
        cy.get('#badButton').should('have.class', 'btn-success')
    })
})
