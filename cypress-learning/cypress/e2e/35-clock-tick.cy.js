const someTimeStamp = new Date(Date.UTC(2017, 2, 14)).getTime() // 1489449600

describe('Clock example', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', null)
    })
    beforeEach(() => {
        cy.log('date timestamp:', someTimeStamp)
        cy.clock(someTimeStamp) // set new browser clock
        cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
    })

    it('Clock demo', () => {
        cy.get('#clock-div').click().should('have.text', '1489449600')
    })
    it('Tick demo', () => {
        cy.get('#tick-div').click().should('have.text', '1489449600')
        cy.tick(10000) // 10 seconds passed
        cy.get('#tick-div').click().should('have.text', '1489449610')
    })
})
