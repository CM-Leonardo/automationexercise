const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '6ebiru',
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: 'https://automationexercise.com/'
  },
})
