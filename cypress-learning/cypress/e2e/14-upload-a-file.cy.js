describe('Upload a file in the DemoQA site', () => {
    before('Set new base URL', () => {
        // set new base URL
        Cypress.config('baseUrl', Cypress.env('web_demoQA'))
    })
    beforeEach(() => {
        cy.visit('/upload-download')
    })
    it('Upload the file', () => {
        cy.get('input#uploadFile').selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'file.txt',
            mimeType: 'text/plain',
            lastModified: Date.now(),
        })

        cy.get('#uploadedFilePath').should('contain', `file.txt`)
    })
    it('Upload file from fixtures folder', () => {
        cy.fixture('example.json', { encoding: null }).as('myFixture')
        cy.get('input#uploadFile').selectFile('@myFixture')

        cy.get('#uploadedFilePath').should('contain', `example.json`)
    })
})
