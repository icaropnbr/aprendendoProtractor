// conf.js

var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

module.exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/pesquisarProtractor.spec.js'],
    baseUrl: 'https://www.google.com/',
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            // para testar sem abrir o browser
            //args: ['--headless', '--no-sandbox']
        }
    },

    onPrepare: function() {
      jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailedSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true,
      })),
      browser.ignoreSynchronization = true;
    }
  }
