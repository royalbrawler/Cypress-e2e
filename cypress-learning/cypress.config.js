const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'http://www.uitestingplayground.com',
		// pageLoadTimeout: 20000,
		// defaultCommandTimeout: 16000,
		env: {
			demoVar: 'Hello from the Cypress.Config.js',
			web_demoQA: 'https://demoqa.com',
			web_theInternet: 'https://the-internet.herokuapp.com',
			web_Angular: 'https://www.globalsqa.com',
		},
		viewportHeight: 1000,
		viewportWidth: 1400,
	},
})
