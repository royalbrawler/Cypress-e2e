const { defineConfig } = require('cypress')
const { verifyDownloadTasks } = require('cy-verify-downloads')

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		charts: true,
		reportPageTitle: 'THE BEST custom-title',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: false,
	},
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			on('task', verifyDownloadTasks)
			require('cypress-mochawesome-reporter/plugin')(on)
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
		retries: {
			runMode: 2, // Configure retry attempts for `cypress run`
			openMode: 0, // Configure retry attempts for `cypress open`
		},
	},
})
