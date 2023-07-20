describe('Dealing with links', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })

    beforeEach(() => {
        cy.visit('/links')
    })

    it('First approach, not click on the link', () => {
        cy.get('#simpleLink').should('have.attr', 'href', 'https://demoqa.com')
        cy.get('#simpleLink').should('have.attr', 'target', '_blank')
    })
    it('Second approach, remove the target', () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click()
        cy.url().then(url => {
            expect(url).to.equal('https://demoqa.com/')
        })
    })
})

describe('Intercepting API(Spying) requests after clicking on a button', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })

    beforeEach(() => {
        cy.visit('/links')
        cy.intercept('GET', 'https://demoqa.com/created').as('linkStatus')
    })

    it('Intercept request successfully', () => {
        cy.get('a#created').click()
        cy.wait('@linkStatus').then(request => {
            expect(request.response.statusCode).to.be.equal(201)
            expect(request.response.statusMessage).to.be.equal('Created')
        })
    })
})
