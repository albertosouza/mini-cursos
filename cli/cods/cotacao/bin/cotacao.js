#! /usr/bin/env node

// modulos que vamos usar nesse comando:
var program = require('commander');
// modulo para realizar requests
var request = require('request');
// registra um novo comando e parâmetros para esse comando
program.version('0.0.1');
// url para pegar os dados da cotação
var url = 'http://api.promasters.net.br/cotacao/v1/valores';

//
// -- Comando para pegar a cotação do dolar
//

program
// subcomando do nosso programa que permite acessar nosso comando com cotacao dolar
.command('dolar')
// alias para acessar o comando com cotacao usd
.alias('usd')
// descrição que é exibida ao rodar o comando cotacao -h
.description('Exibe a cotação atual do dolar')
.action(function (prog) {

  request.get({
    url: url+'?alt=json',
    // o header é nescessário nessa url, sem ele o site não está retornando nada
    headers: { 'User-Agent': 'request' },
  }, function (error, response, body) {
    if (error) {
      console.error('Erro ao carregar os dados da cotação:\n',error);
      return;
    }
    // converte a resposta de JSON para um object
    var data = JSON.parse(body);
    // exibe a cotação do dolar no terminal
    console.log(data.valores.USD.valor);
  });
});


//
// -- Comando para pegar a cotação do euro
//

program
// subcomando do nosso programa que permite acessar nosso comando com cotacao do euro
.command('euro')
// alias para acessar o comando com cotacao eur
.alias('eur')
// descrição que é exibida ao rodar o comando cotacao -h
.description('Exibe a cotação atual do euro')
.action(function (prog) {
  // usando o modulo request para carregar dados de uma url:
  request.get({
    url: url+'?alt=json',
    // o header é nescessário nessa url, sem ele o site não está retornando nada
    headers: { 'User-Agent': 'request' },
  }, function (error, response, body) {
    if (error) {
      console.error('Erro ao carregar os dados da cotação:\n',error);
      return;
    }
    // converte a resposta de JSON para um object
    var data = JSON.parse(body);
    // exibe a cotação do euro no terminal
    console.log(data.valores.EUR.valor);
  });
});

// Lê os argumentos do comando atual e prepara para a execução da ação relacionada:
program.parse(process.argv);
// Se o usuário não passar nenhum argumento ele vai exibir um texto:
if (!program.args.length) {
  console.log('O comando não foi encontrato, use o comando "contacao -h" para ver todas as opções disponíveis.');
}
