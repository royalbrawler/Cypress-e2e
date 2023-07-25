describe('Sharing my fixture', () => {
    beforeEach(() => {
        cy.fixture('jsonExample').as('testData')
    })

    it('Accesing the shared fixture #1', () => {
        cy.get('@testData').then(data => {
            cy.log('Accessed data', data)
        })
    })

    it('Accesing the shared fixture #2', () => {
        cy.get('@testData').then(cy.log)
    })

    it('Getting info based on my fixture', () => {
        cy.get('@testData')
            .its('users')
            .then(data => {
                cy.log('Accessed data', data)
                data.forEach(obj => {
                    cy.log(obj.name)
                    cy.log(obj.pet)
                })
            })
    })
})
