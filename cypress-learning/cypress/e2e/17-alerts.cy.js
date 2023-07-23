describe('Alerts', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_theInternet'))
    })
    beforeEach(() => {
        cy.visit('/javascript_alerts')
    })

    it('JS Alert', () => {
        cy.contains('button', 'Click for JS Alert').click()
        cy.on('window:alert', message => {
            expect(message).to.equal('I am a JS Alert')
        })
        // cy.on('window:confirm', () => {
        //     return true
        // })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    it('JS Confirm(accept)', () => {
        cy.on('window:confirm', message => {
            expect(message).to.equal('I am a JS Confirm')
        })
        cy.on('window:confirm', () => true)
        cy.contains('button', 'Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })
    it('JS Confirm(cancel)', () => {
        cy.on('window:confirm', message => {
            expect(message).to.equal('I am a JS Confirm')
        })
        cy.contains('button', 'Click for JS Confirm').click()
        cy.on('window:confirm', () => false)
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
    it('JS Prompt', () => {
        cy.window().then(window => {
            cy.stub(window, 'prompt').returns('HELLO from prompt ALERT')
        })
        cy.contains('button', 'Click for JS Prompt').click()
        cy.get('#result').should(
            'have.text',
            'You entered: HELLO from prompt ALERT'
        )
    })
})
