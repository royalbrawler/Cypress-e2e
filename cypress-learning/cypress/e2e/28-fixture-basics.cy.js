describe('Using a fixture', () => {
    it('Loading the file and display the data in the log', () => {
        cy.fixture('jsonExample').then(data => {
            cy.log('jsonExample', data)
            cy.log(data.prop1)
            cy.log('Printing object - prop2', data.prop2)
        })
    })
})
