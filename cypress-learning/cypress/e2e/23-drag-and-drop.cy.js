describe('Drag and Drop', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.visit('/droppable')
    })

    it('Drag and drop demo', () => {
        // with '@4tw/cypress-drag-drop' module
        cy.get('#draggable').drag('#droppable', { force: true })
    })
})
