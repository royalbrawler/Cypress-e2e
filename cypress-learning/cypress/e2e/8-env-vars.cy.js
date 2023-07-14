describe('Environment Variable Demo', () => {
	it('Demo', () => {
		cy.log(`Printing environment variable Value: ${Cypress.env('demoVar')}`)
	})
})
