describe('basics', () => {
    beforeEach(() => {
        // cy.visit('/')
        cy.visit('/textinput')
    })
    it('visit explanation', () => {
        cy.url().then(url => {
            cy.log(`Printing the url: ${url}`)
            expect(url).to.contains('/textinput')
        })

        cy.url().should(url => {
            expect(url).to.contains('/textinput')
        })
    })
    it('title validation', () => {
        cy.title().then(title => {
            expect(title).to.be.equal('Text Input')
        })
    })
    it('Press button', () => {
        cy.get('input#newButtonName').clear().type('new button text 123')
        cy.get('#updatingButton')
            .click()
            .should('have.text', 'new button text 123')
    })
})
