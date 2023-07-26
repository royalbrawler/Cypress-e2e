describe('', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        // should be before the visit request
        cy.intercept(
            'GET',
            `${Cypress.env('web_demoQA')}/BookStore/v1/Books`,
            { fixture: 'mockData.json' }
        ).as('mockdemo')

        cy.visit('/books')
    })

    it('mocking data', () => {
        cy.wait('@mockdemo')
    })
})
