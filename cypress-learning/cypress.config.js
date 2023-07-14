const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'http://www.uitestingplayground.com',
		// pageLoadTimeout: 20000,
		// defaultCommandTimeout: 16000,
	},
})
