describe('Accordian', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.visit('/accordian')
    })

    it('Default Accordian validation example', () => {
        cy.get('#section1Heading').click()
        cy.get('#section2Heading').click()

        cy.get('#section1Content').should('not.be.visible')
        cy.get('#section2Content').should('be.visible')
        cy.get('#section3Content').should('not.be.visible')

        // additional checks
        cy.get('#section1Heading')
            .next() // next html element
            .should('have.css', 'display', 'none')

        cy.get('#section2Heading')
            .next()
            .should('have.css', 'display', 'block')
            .and('have.class', 'show')

        cy.get('#section3Heading').next().should('have.css', 'display', 'none')
    })
    it('Conditional testing Accordian validation example', () => {
        cy.get('#section1Heading')
            .next()
            .then(nextDiv => {
                if (nextDiv.hasClass('show')) {
                    // do something if it's active
                    cy.get('#section1Heading').click()

                    cy.get('#section1Content').should('not.be.visible')
                    cy.get('#section2Content').should('not.be.visible')
                    cy.get('#section3Content').should('not.be.visible')
                } else {
                    // do something else
                    cy.get('#section1Heading').click()

                    cy.get('#section1Content').should('be.visible')
                    cy.get('#section2Content').should('not.be.visible')
                    cy.get('#section3Content').should('not.be.visible')
                }
            })
    })
})
