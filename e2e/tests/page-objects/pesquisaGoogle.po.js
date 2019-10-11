// PO - Elementos da página de pesquisa do Google

// Criando a classe e seus atributos (elementos da página Web)
var PesquisaGoogle = function () {
    var url = 'https://www.google.com/';
    var campoDePesquisa = element(by.name('q'));
    var botaoPesquisar = element(by.className('FPdoLc VlcLAe')).element(by.className('gNO89b'));

    // Método para realizar a pesquisa
    this.realizarPesquisa = function (palavraPesquisada) {
        /* Enviará a palavra que for passada por parâmetro
           para o campo de pesquisa*/
        campoDePesquisa.sendKeys(palavraPesquisada);

        // Clicará no botão para realizar a pesquisa
        botaoPesquisar.sendKeys(protractor.Key.ENTER);
    }

    // Método para acessar a página do Google
    this.visitar = function () {
        browser.get(url);
    }
};

// exportando o PO para ser utilizado pelo teste;
module.exports = PesquisaGoogle;