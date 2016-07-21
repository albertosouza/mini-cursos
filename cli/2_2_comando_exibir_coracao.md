# Criando um programa com comandos para exibir a cotação atual do dolar e euro

Nesse comando ao executar "cotacao dolar" o programa vai exibir o valor do dolar agora.

```sh
cotacao dolar
# 3.200
```

E um segundo subcomando para: 

```sh
cotacao euro
# 3.608
```

O programa vai acessar uma url, carregar os dados em JSON e exibir a informação da cotação atual.

URL para checar o valor do dolar: http://api.promasters.net.br/cotacao/v1/valores

## Passo a passo:

### 1- Criando um modulo/projeto novo

Criando a pasta do projeto:

```sh
mkdir cotacao
```

Entre na pasta do projeto: 

```sh
cd cotacao
```

Criando o package.json do projeto:

```sh
npm init -y
```

### 2- Instalando as dependencia:

```sh
npm install --save commander
npm install --save request
```

### 3- Criando e registrando o arquivo executável:

3.1- Crie o arquivo cotacao.js na pasta bin:

```sh
mkdir bin
touch bin/cotacao.js
```

3.2- para registrar o arquivo cotacao como um comando temos que adiciona-lo na configuração bin do arquivo package.json e adicionar:
```json
  "bin": {
    "cotacao": "bin/cotacao.js"
  }
```

O arquivo package.json vai ficar assim:

```json
{
  "name": "cotacao",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "commander": "^2.9.0"
  },
  "bin": {
    "cotacao": "bin/cotacao.js"
  }
}
```

### 4- Programando!

#### 4.1- Abra o arquivo **bin/cotacao.js** em seu editor preferido.

Adicione a linha abaixo na primeira linha do arquivo, isso indica que o arquivo é executável com o node

```js
#! /usr/bin/env node
```

#### 4.2- Incluindo as biliotecas

Nesse projeto vamos usar o commander para criar o nosso programa e o request para carregar o dado da URL:

```js
// modulos que vamos usar nesse comando:
var program = require('commander');
// modulo para realizar um request
var request = require('request');
```

#### 4.3- Registrando a versão atual do programa:

```js
// registra um novo comando e parâmetros para esse comando
program.version('0.0.1');
```

#### 4.4- Url de acesso aos dados

Nesse programa vamos ter 2 comandos que usam a mesma url de acesso então salvamos essa url em uma variável:

```js
// url para pegar os dados da cotação
var url = 'http://api.promasters.net.br/cotacao/v1/valores';
```

#### 4.5- Adicionando o primeiro comando

```js
program
// subcomando do nosso programa que permite acessar nosso comando com cotacao dolar
.command('dolar')
// alias para acessar o comando com cotacao usd
.alias('usd')
// descrição que é exibida ao rodar o comando cotacao -h
.description('Exibe a cotação atual do dolar')
.action(function (prog) {
  // usando o request para carregar dados de uma url:
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

```

#### 4.6- Adicionando o segundo comando

```js
program
// subcomando do nosso programa que permite acessar nosso comando com cotacao do euro
.command('euro')
// alias para acessar o comando com cotacao eur
.alias('eur')
// descrição que é exibida ao rodar o comando cotacao -h
.description('Exibe a cotação atual do euro')
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
    // exibe a cotação do euro no terminal
    console.log(data.valores.EUR.valor);
  });
});
```

#### 4.7- Carregando nosso comando no contexto global:

Execute o comando `npm link` no seu terminal na pasta cotacao onde criamos o package.json do nosso programa.

## Código final:

[Link](cotacao/bin/cotacao.js)


## Próximo conteúdo

https://github.com/albertosouza/mini-cursos/blob/master/cli/3_escrevendo_testes_para_meus_comandos.md
