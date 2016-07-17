#! /usr/bin/env node

// modulos que vamos usar nesse comando:
var program = require('commander');
var S = require('string');
// registra um novo comando e parâmetros para esse comando, no caso temos 1 argumento obrigátório e 1 opção para selecionar a ação:
program
.version('0.0.1')
.arguments('<texto>')
.option('-a, --action <action>', 'Ação que o nosso comando vai realizar')
.action(function (texto, prog) {
  // carrega o texto:
  var text = S( texto );
  // mostra o texto formatado no terminal
  console.log( text[ prog.action ]().s );
});
// Lê os argumentos do comando atual e prepara para a execução da ação relacionada:
program.parse(process.argv);
// Se o usuário não passar nenhum argumento ele vai exibir um texto:
if (!program.args.length) {
  console.log('O comando não foi encontrato, use o comando "muda-texto -h" para ver todas as opções disponíveis.');
}
