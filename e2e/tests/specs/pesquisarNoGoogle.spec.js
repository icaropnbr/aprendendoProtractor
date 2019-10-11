// Pesquisar 'Protractor' no Google

// Requisistando a classe criada
var PesquisaGoogle = require('../page-objects/pesquisaGoogle.po.js');

// Instanciando o objeto
var pesquisaGoogle = new PesquisaGoogle();

// Teste #001
describe("Teste #001 - Acessar a página do Google e procurar por 'Protractor'", function () {

    it("Acessar a página do Google", function () {
        // Acessa o site www.google.com
        pesquisaGoogle.visitar();

        // Testa se a página acessada tem o título 'Google'
        expect(browser.getTitle()).toEqual('Google');
    });

    it("Pesquisa por Protractor e verifica se a página de resultado tem o título ", function () {
        // Acessa o site www.google.com
        pesquisaGoogle.realizarPesquisa('Protractor');

        // Testa se a página acessada tem o título 'Google'
        expect(browser.getTitle()).toEqual('Protractor - Pesquisa Google');
    });

})