describe('Demo QA', () => {
	before('Set new base URL', () => {
		// set new base URL
		Cypress.config('baseUrl', Cypress.env('web_demoQA'))
	})

	beforeEach(() => {
		cy.visit('/buttons')
	})

	it('Double click test', () => {
		cy.get('#doubleClickBtn').dblclick()
		cy.get('#doubleClickMessage').should(
			'have.text',
			'You have done a double click'
		)
	})
	it('Right click test', () => {
		cy.get('#rightClickBtn').rightclick()
		cy.get('#rightClickMessage').should(
			'have.text',
			'You have done a right click'
		)
	})
})
