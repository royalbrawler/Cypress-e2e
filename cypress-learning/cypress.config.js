const { defineConfig } = require('cypress')
const { verifyDownloadTasks } = require('cy-verify-downloads')
// Excel requirements
const xlsx = require('node-xlsx').default
const fs = require('node:fs')
const path = require('node:path')
// mySQL
const mysql = require('mysql')

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
			// verify-downloads
			on('task', verifyDownloadTasks)
			// mochawesome
			require('cypress-mochawesome-reporter/plugin')(on)
			// excel
			on('task', {
				parseXlsx({ filePath }) {
					return new Promise((resolve, reject) => {
						try {
							const jsonData = xlsx.parse(fs.readFileSync(filePath))
							resolve(jsonData)
						} catch (e) {
							reject(e)
						}
					})
				},
			})
			// mySQL
			on('task', {
				queryDb: query => {
					return queryTestDb(query, config)
				},
			})
		},
		baseUrl: 'http://www.uitestingplayground.com',
		// pageLoadTimeout: 20000,
		// defaultCommandTimeout: 16000,
		env: {
			demoVar: 'Hello from the Cypress.Config.js',
			web_demoQA: 'https://demoqa.com',
			web_theInternet: 'https://the-internet.herokuapp.com',
			web_Angular: 'https://www.globalsqa.com',
			db: {
				host: 'localhost',
				user: 'root',
				password: 'password',
				database: 'cypress_test',
			},
			mobileViewportWidthBreakpoint: 700,
		},
		// viewportHeight: 1000,
		// viewportWidth: 1400,
		retries: {
			runMode: 2, // Configure retry attempts for `cypress run`
			openMode: 0, // Configure retry attempts for `cypress open`
		},
	},
})

// mySQL
function queryTestDb(query, config) {
	// creates a new mysql connection using credentials from cypress.json env's
	const connection = mysql.createConnection(config.env.db)
	// start connection to db
	connection.connect()
	// exec query + disconnect to db as a Promise
	return new Promise((resolve, reject) => {
		connection.query(query, (error, results) => {
			if (error) reject(error)
			else {
				connection.end()
				return resolve(results)
			}
		})
	})
}
