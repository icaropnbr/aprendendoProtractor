// Configuração do Protractor

// Chamada do Jasmine-Spec-Reporter
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',  // endereço do servidor para testes
  specs: ['./specs/pesquisarNoGoogle.spec.js'],  // caminho do arquivo de teste

  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,  // apresentação sumária das falhas ocorridas
      displayFailedSpec: true,       // apresentação se houve falha no teste
      displaySuiteNumber: true,      // apresentação do número da suíte de teste
      displaySpecDuration: true,     // apresentação da duração do teste
    })),
    // Para realizar testes em ambientes não-Angular
    browser.ignoreSynchronization = true;
  },
};