const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: 'cypress/e2e/step_definitions/**/*.js'
      });
      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://blankfactor.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome, mocha-junit-reporter',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mochawesome',
        reportFilename: 'report',
        overwrite: false,
        html: true,
        json: true
      },
      mochaJunitReporterReporterOptions: {
        mochaFile: 'cypress/reports/junit/results-[hash].xml'
      }
    }
  },
});
