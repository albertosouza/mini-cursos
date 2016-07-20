// modulos que vamos usar
var exec = require( 'child_process' ).exec;
var path = require('path');
var assert = require('assert');
// arquivo que será testado
var cotacao = path.resolve('./bin/cotacao.js');

describe('Dolar test', function() {

  it('deve retornar o valor atual do dolar', function (done) {
    exec(cotacao + ' dolar', function(error, stdout, stderr) {
      if (error) return done(error);
      // retorna um número
      assert(Number(stdout));

      done();
    });
  });

  it('deve retornar o valor atual do dolar com alias', function (done) {
    exec(cotacao + ' usd', function(error, stdout, stderr) {
      if (error) return done(error);
      // retorna um número
      assert(Number(stdout));

      done();
    });
  });

});

describe('Euro test', function () {

  it('deve retornar o valor atual do euro', function (done) {
    exec(cotacao + ' euro', function(error, stdout, stderr) {
      if (error) return done(error);
      // retorna um número
      assert(Number(stdout));

      done();
    });
  });

  it('deve retornar o valor atual do euro com alias', function (done) {
    exec(cotacao + ' eur', function(error, stdout, stderr) {
      if (error) return done(error);
      // retorna um número
      assert(Number(stdout));

      done();
    });
  });

});