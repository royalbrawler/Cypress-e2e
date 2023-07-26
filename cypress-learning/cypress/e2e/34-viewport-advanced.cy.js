const isMobile = () => {
    return (
        Cypress.config('viewportWidth') <
        Cypress.env('mobileViewportWidthBreakpoint')
    )
}

describe('Viewport iteration', () => {
    const viewportsToTest = ['iphone-3', 'ipad-2', 'macbook-15']
    viewportsToTest.forEach(viewport => {
        it(viewport + ' viewport', () => {
            cy.viewport(viewport)
        })
    })
})

describe('Hybrid suite', () => {
    it('isMobile Test', () => {
        if (isMobile()) {
            cy.log('mobile viewport validation')
        } else {
            cy.log('desktop viewport validation')
        }
    })
})
