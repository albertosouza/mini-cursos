var request = require('request');
var cheerio = require('cheerio');

function dadosSimples (url) {
  request(url, function (error, response, body) {
    if (error) throw new Error(error);
    // processa a pagina
    var $ = cheerio.load(body);
    // pega os dados
    var nome = $('div[itemprop=name]').text();
    var email = $('li[itemprop=email] a').text();
    // exibindo no terminal
    console.log('O '+nome+' tem o email de contato: '+email);
  });
}

function dadosComGZIP (url) {
  request({
    url: url,
    gzip: true
  }, function(error, response, body) {
    if (error) throw new Error(error);

    var $ = cheerio.load(body);

    var descricao = $('div.jumbotron-inverted div p:not(.lead)').text();

    console.log('A descrição do We.js é: ' + descricao);
  });
}

// carregar a página
// https://github.com/albertosouza
dadosSimples ('https://github.com/albertosouza');
// carregando dados de páginas com gzip
dadosComGZIP('https://wejs.org');
