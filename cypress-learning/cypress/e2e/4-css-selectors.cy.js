// MORE CSS SELECTORS
// https://www.w3schools.com/cssref/css_selectors.php

describe('Locators', () => {
    beforeEach(() => {
        cy.visit('/dynamicid')
    })

    it('cy.contains Example', () => {
        cy.contains('Button with Dynamic ID').should(
            'have.text',
            'Button with Dynamic ID'
        )
    })

    it('cy.get + cy.find Example', () => {
        cy.get('div').find('button').should('have.text', 'Button with Dynamic ID')
    })

    it('CSS selector using an attribute', () => {
        // <button class="btn btn-primary" type="button" id="731b91a0-fd42">Button with Dynamic ID</button>
        cy.get('button[class="btn btn-primary"]').should(
            'have.text',
            'Button with Dynamic ID'
        )
    })

    it('CSS selector using a class', () => {
        // <button class="btn btn-primary" type="button" id="731b91a0-fd42">Button with Dynamic ID</button>
        cy.get('.btn-primary').should('have.text', 'Button with Dynamic ID')
    })
})
