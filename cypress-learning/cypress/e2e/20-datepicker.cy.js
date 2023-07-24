describe('Date picker', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.visit('/date-picker')
    })

    it('date picker demo', () => {
        cy.get('#datePickerMonthYearInput').click()
        cy.get('select.react-datepicker__month-select').select('0') // January
        cy.get('select.react-datepicker__year-select').select('1900')

        // select day...
        // #1 using default cy.contains
        // cy.contains('.react-datepicker__day', '16').click()

        // #2 using external library - cypress-testing-library(@testing-library/cypress)
        cy.findAllByText('16').click()

        cy.get('#datePickerMonthYearInput').should('have.value', '01/16/1900')
    })
})
