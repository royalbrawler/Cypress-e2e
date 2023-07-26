describe('Excel playground', () => {
    it('read data from excel', () => {
        cy.parseXlsx('cypress/fixtures/NewMicrosoftExcel.xlsx').then(jsonData => {
            cy.log(jsonData)

            let sheet = jsonData[0].data
            let dataJson = []
            sheet.forEach(row => {
                cy.log(row)
                dataJson.push({
                    username: row[0],
                    password: row[1],
                })
            })

            cy.writeFile('cypress/fixtures/excelData.json', dataJson)
        })
    })
})
