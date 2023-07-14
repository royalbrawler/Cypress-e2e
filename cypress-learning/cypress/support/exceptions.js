Cypress.on('uncaught:exception', (e, runnable) => {
    if (e.message.includes('Things went bad')) {
        // we expected this error, so let's ignore it
        // and let the test continue
        return false
    }

    // ignores any uncaught exception
    return false
})