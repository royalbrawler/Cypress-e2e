describe('Download a file in the DemoQA site', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.visit('/upload-download')
    })
    it('Download the file', () => {
        cy.get('#downloadButton').click()

        // verify download using "cy-verify-downloads" module
        cy.verifyDownload('sampleFile.jpeg')
        // cy.verifyDownload('sampleFile', { contains: true })
    })
})
