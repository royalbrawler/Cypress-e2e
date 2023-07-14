describe('Click challenge', () => {
    beforeEach(() => {
        cy.visit('/click')
    })

    it('Class assertions', () => {
        cy.get('#badButton').click().should('have.class', 'btn-success')
    })
    it('Background assertions', () => {
        cy.get('#badButton')
            .click()
            .should('have.css', 'background-color', 'rgb(40, 167, 69)')
    })
})

describe('Hover challenge', () => {
    beforeEach(() => {
        cy.visit('/mouseover')
    })

    it('Hover with cypress workaround', () => {
        // this Hover doens't work (does not trigger background color change on mouseover)
        cy.get('.text-primary').contains('Click me').trigger('mouseover')
    })
    it('Hover with realHover workaround', () => {
        cy.get('.text-primary').contains('Click me').realHover()
    })
})

describe('MouseOver clicks challenge', () => {
    beforeEach(() => {
        cy.visit('/mouseover')
    })

    it('Click link 2 consecutive times ', () => {
        cy.get('div > a').contains('Click me').as('btn')
        cy.get('#clickCount').invoke('text').as('clickCount')

        cy.get('@btn').click()
        cy.get('@clickCount').should('eq', '1')
        cy.get('@btn').click()
        cy.get('@clickCount').should('eq', '2')
    })
})

describe('Dynamic table challenge', () => {
    beforeEach(() => {
        cy.visit('/dynamictable')
    })

    it('Chrome CPU Test', () => {
        let cpuIndex
        // get index of 'CPU' in table headers - variant #1
        // cy.contains('span[role="columnheader"]', 'CPU').invoke('index').then((i) => {
        //     cy.log('CPU index found', i)
        //     cpuIndex = i
        // })

        cy.get(`div[role="row"]`).each(($row, index) => {
            // get index of 'CPU' in table headers - variant #2
            if (index === 0) {
                // header row
                // get <span> elements from the row using jQuery
                const elements = Cypress.$.makeArray($row.children('span'))
                cy.wrap(elements, { log: false }).each(($col, index) => {
                    if ($col.text().includes('CPU')) {
                        cy.log('CPU index found', index)
                        cpuIndex = index
                    }
                })
            }
            if ($row.text().includes('Chrome')) {
                // get <span> elements from the row using jQuery
                const elements = Cypress.$.makeArray($row.children('span'))
                cy.wrap(elements, { log: false }).each(($col, index) => {
                    if (index == cpuIndex) {
                        cy.log('Chrome CPU value found', $col.text())
                        cy.get('.bg-warning').should('include.text', $col.text())
                    }
                })
            }
        })
    })
})
