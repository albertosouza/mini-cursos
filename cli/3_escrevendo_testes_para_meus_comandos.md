# Testando os comandos 

Agora vamos criar testes para nossos programas.

OBS: O ideal é sempre escrever testes antes de escrever os comandos pois isso ajuda a gerar um código com menos problemas.

Nessa parte vamos usar o programa criado no conteúdo do curso anterior para carregar dados da cotação do dolar e do euro.

## Criando testes:

### 1- Definindo os objetivos:

Antes de escrever algum teste você precisa definir o que quer testar, por exemplo:

Se eu quero que o comando "cotacao dolar" retorne o valor do dolar vou criar um teste para realizar esse teste e depois ir escrevendo o código.

Nos testes podemos realizar praticamente qualquer tipo de teste mas para facilitar vamos criar testes simples.

Então vamos criar 4 testes que são:
- testar se o comando "cotacao  dolar" returna um número
- testar se o comando "cotacao  usd" returna um número
- testar se o comando "cotacao  euro" returna um número
- testar se o comando "cotacao  eur" returna um número

### 2- Modulos de teste

Nesses testes usaremos o modulo da comunidade chamado [mocha](https://mochajs.org/) e os modulos child_process, path e assert nativos do node

- mocha: framework de testes
- child_process: modulo nativo que permite executar comandos
- path: modulo para formatar e resolver caminhos e diretórios
- assert: modulo nativo usado para testar algum resultado

No caso o único modulo que vamos intalar é o mocha.

### 3- Configurando

Entre na pasta do projeto e ...

#### 3.1- Instalando o mocha

```sh
npm install mocha --save-dev
```

#### 3.2- Configurando o "npm test". Comando padrão para rodar os testes

O **npm test** fica registrado na configuração **scripts** do arquivo **package.json**

Edite o arquivo package.json e altere as linhas:

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

para: 

```
  "scripts": {
    "test": "mocha test/**/*.test.js -b"
  },
```

salve e feche o arquivo package.json

#### 3.3- Criando os arquivos de teste

Crie a pasta test para conter nossos arquivos de testes:

```sh
mkdir test
```

Crie o arquivo **cotacao.test.js** na pasta test

#### 3.4- Testando ...

Edite o arquivo `test/cotacao.test.js` 

No início do arquivo carregamos os modulos que vamos usar:

```js
var exec = require( 'child_process' ).exec;
var path = require('path');
var assert = require('assert');
```

Salve o caminho para o arquivo com os comandos :

```js
var cotacao = path.resolve('./bin/cotacao.js');
```

Para cada grupo de testes definimos um novo bloco de testes usando o `describe` do modulo mocha

No caso temos 2 grupos o **Dolar test** e o **Euro test** Ex:

```js
describe('Dolar test', function() {

});

describe('Euro test', function() {

});
```

Dentro do bloco de "dolar test" vamos realizar 2 testes o cotacao dolar e o cotacao usd (alias) e para definir um teste usamos o `it` da seguinte forma:

```js
it('deve retornar o valor atual do dolar', function (done) {
  // teste aqui ...
  // e depois de testar execute o done() ...
});
```

O primeiro teste completo vai ficar da seguinte forma (explicação nos comentáios do código):

```js
  // define um novo teste que "deve retornar o valor atual do dolar"
  it('deve retornar o valor atual do dolar', function (done) {
    // usamos o exec para executar um comando no arquivo cotacao e 
    // passando o argumento dolar
    exec(cotacao + ' dolar', function(error, stdout, stderr) {
      // se retornar algum erro rodamos o done passamos o erro e paramos a execução do teste aqui retornando
      if (error) return done(error);
      // Testando se o retorno do comando é um número válido:
      assert(Number(stdout));
      // sempre execute o callback done() quando finalizar os testes
      done();
    });
  });
```

Os outros 3 testes são bem parecidos com o primeiro e acredito que é mais fácil ver todo o código disponível no link: [código do teste completo](cotacao/test/cotacao.test.js)
