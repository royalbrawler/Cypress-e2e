describe('Locators', () => {
    beforeEach(() => {
        cy.visit('/classattr')
    })
    it('How to find elements by its text', () => {
        cy.xpath('//*[text()="Correct variant is"]').should(
            'contain.text',
            'Correct'
        )
    })
    it('Find an element by its attribute using xpath', () => {
        cy.xpath('//pre[@class=" language-html"]').should('contain.text', 'button')
    })

    it('Find by class (middle and spaces)', () => {
        cy.xpath(
            `//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]`
        )
            .should('have.class', 'btn-primary')
            .and('have.css', 'background-color', 'rgb(0, 123, 255)')
    })
})
