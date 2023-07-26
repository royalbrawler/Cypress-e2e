describe('API Testing Demo', () => {
    it('Get an auth from API', () => {
        cy.request('POST', `${Cypress.env('web_demoQA')}/Account/v1/Login`, {
            userName: 'test123',
            password: '271gR46@0Nal',
        }).then(response => {
            const userId = response.body.userId
            const token = response.body.token
            cy.wrap(userId).as('userId')
            cy.wrap(token).as('token')
        })
    })
    it('Get the user Info', function () {
        const userId = this.userId
        const token = this.token
        const authorization = `Bearer ${token}`

        const options = {
            method: 'GET',
            url: `${Cypress.env('web_demoQA')}/Account/v1/User/${userId}`,
            headers: {
                authorization,
            },
        }
        cy.request(options).should(response => {
            expect(response.status).to.equal(200)
            expect(response.body).to.haveOwnProperty('books').and.be.an('array')
            expect(response.body).to.haveOwnProperty('username').and.equal('test123')
            expect(response.body).to.haveOwnProperty('userId').and.equal(userId)
        })
    })
})
