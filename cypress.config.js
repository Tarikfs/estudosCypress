const { defineConfig } = require("cypress");

module.exports = {
  projectId: "r27wtd",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    testIsolation: false
  },
  "reporter": "cypress-mochawesome-reporter"
}

