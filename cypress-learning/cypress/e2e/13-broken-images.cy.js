describe('Broken images with DemoQA', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.visit('/broken')
    })
    it('Not Broken Image Assertion', () => {
        cy.get('div > img[src="/images/Toolsqa.jpg"]')
            .should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
    })
    it('Broken Image Assertion', () => {
        cy.get('div > img[src="/images/Toolsqa_1.jpg"]')
            .should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
    })
})
