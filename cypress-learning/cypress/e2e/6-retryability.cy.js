Cypress.config('defaultCommandTimeout', 16000)

describe('Retry-ability demo', () => {
    it('Visit with delay', () => {
        cy.visit('/loaddelay', { timeout: 30000 })
    })
    it('Client delay button', () => {
        cy.visit('/clientdelay')
        cy.get('#ajaxButton').click()
        cy.get('.bg-success').should(
            'have.text',
            'Data calculated on the client side.'
        )
    })
    it('Progress bar 100%', () => {
        cy.visit('/progressbar')
        cy.get('#startButton').click()
        cy.get('#progressBar', { timeout: 60000 }).should('have.text', '100%')
    })
    it('Clicks Start button and then waits for the progress bar to reach 75%.', () => {
        cy.visit('/progressbar')
        cy.get('#startButton').click()
        cy.get('#progressBar', { timeout: 60000 }).should('have.text', '75%')
        cy.get('#stopButton').click()
        cy.get('#progressBar').should('have.text', '75%')
    })
})
