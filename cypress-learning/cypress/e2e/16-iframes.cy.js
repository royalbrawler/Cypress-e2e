describe('Iframes example DemoQA', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.visit('/nestedframes')
    })

    it('Simple and nested iframe - Variant 1', () => {
        // variant 1
        cy.get('#frame1')
            .its('0.contentDocument')
            .should('not.be.empty')
            .its('body')
            .as('body_parentFrame')

        cy.get('@body_parentFrame')
            .should('be.visible')
            .should('not.be.empty')
            .then(cy.wrap)
            .should('have.text', 'Parent frame')
            .find('iframe', { timeout: 10000 })
            .its('0.contentDocument')
            .should('not.be.empty')
            .its('body')
            .as('body_childFrame')

        cy.get('@body_childFrame')
            .should('be.visible')
            .then(cy.wrap)
            .should('have.text', 'Child Iframe')
    })
    it('Simple and nested iframe - Variant 2', () => {
        // variant 2
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).should('have.text', 'Parent frame')
            cy.wrap(body)
                .find('iframe')
                .then(childIframe => {
                    const childBody = childIframe.contents().find('body')
                    cy.wrap(childBody).find('p').should('have.text', 'Child Iframe')
                })
        })
    })
})

describe('Iframes example theInternet', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_theInternet'))
    })
    beforeEach(() => {
        cy.visit('/iframe')
    })

    it('Iframe demo', () => {
        cy.get('#content')
            .find('iframe')
            .then(iframe => {
                const body = iframe.contents().find('body')
                cy.wrap(body).find('p').type('{selectAll}{del}Hello World')
                cy.wrap(body).find('p').should('have.text', 'Hello World')
            })
    })
})
