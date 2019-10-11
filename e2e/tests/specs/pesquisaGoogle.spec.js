// Teste que pesquisa a palavra 'Protractor' no Google e verifica se o título
// da página é 'Protractor - Pesquisa Google'

// Teste #001
describe("Teste #001 - Pesquisar por 'Protractor' no Google", function () {

    it('Digita Protractor e clica no botão de pesquisa', function () {
        // Visita o site do Google
        browser.get('https://www.google.com/');

        // Digita 'Protractor' no campo de pesquisa
        element(by.name('q')).sendKeys('Protractor');

        // Clica no botão de pesquisa
        element(by.className('FPdoLc VlcLAe')).element(by.className('gNO89b')).click();

        // Verificando se o título da página é 'Protractor - Pesquisa Google'
        expect(browser.getTitle()).toEqual('Protractor - Pesquisa Google');
    })
})