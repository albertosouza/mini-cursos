# Criando um comando para alterar textos

Vamos criar um comando simples que vai receber um texto, converte-lo e enviar o resultado para o terminal.

Exemplo:

```sh
muda-texto 'oi Mundo' -a capitalize
```

## Passo a passo:

[Vamos continuar do conteúdo anterior do curso: Iniciando](1_iniciando.md)

Em seu terminal entre na pasta do modulo que criamos no comando anterior

### 1- Instalando as dependências:

No nosso comando de terminal vamos usar o modulo [**commander**](https://www.npmjs.com/package/commander) para tratar os argumentos e configurar o nosso comando e o modulo [**string**](https://www.npmjs.com/package/string) para converter os textos.

```sh
npm i --save commander string
```

### 2- Criando e registrando o comando:

Vamos chamar o nosso comando de **muda-texto**.

#### 1.1- Para registrar esse comando temos que adiciona-lo na configuração **bin** do **package.json** :

```json
{
  "name": "teste",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",

  "bin": {
    "say-my-name": "bin/say-my-name.js",
    "muda-texto": "bin/muda-texto.js"
  }
}
```

#### 2.2- Crie o arquivo **muda-texto.js** na pasta **bin** com o conteúdo:

```js
#! /usr/bin/env node

console.log('vamos mudar o texto, TODO!')
```

#### 2.3- Rode o npm link novamente

```sh
npm link
```

OBS: Pode ser nescessário usar o sudo antes do comando acima.

#### 2.4- Testando

Para testar se o seu comando está registrado rode `muda-texto` no terminal

```sh
muda-texto
# vamos mudar o texto, TODO!
```

### 3- Desenvolvendo o comando:

Agora vamos adicionar as funções do nosso comando.

Para começar remova o `console.log('vamos mudar o texto, TODO!')` do arquivo **muda-texto.js**.

O arquivo vai ficar assim:

```js
#! /usr/bin/env node
```

#### 3.1- Carregando os modulos que vamos usar no nosso comando:

Adicione as linhas`abaixo no arquivo **muda-texto.js**:

```js
var program = require('commander');
var S = require('string');
```

#### 3.2- Usando o comander para configurar um comando:

> No comander você pode definir argumentos e opções para o seu comando e ele automaticamente gera as inscrições de uso quando o comando for executado com a opção `-h` . Ex: `muda-text -h`

Adicione as linhas abaixo no arquivo **muda-texto.js**:

```js
program
.version('0.0.1')
.arguments('<texto>')
.option('-a, --action <action>', 'Ação que o nosso comando vai realizar')
.action(function (texto, prog) {
  console.log('recebi o texto:', texto);
  console.log('informações:', prog);
});

program.parse(process.argv);
```

Agora ao rodar o comando **muda-texto 'oi mundo'** o terminal vai exibir algumas o texto 'recebi o texto: oi mundo' e os dados do objeto prog.

TIP: Use o console.log para exibir dados no terminal.

Explicando o código acima:

```js
// primeiro pegamos o objeto program definido na etapa anterior
// do curso:
program
// depois setamos a versão atual do nosso programa:
.version('0.0.1')
// o nosso programa vai receber o argumento texto que é nescessário 
// para a execução da ação (use [] para definir argumentos opcionais 
// ex: [text]):
.arguments('<texto>')
// Noos programa vai aceitar o argumento --action ou -a com um valor obrigatório:
.option('-a, --action <action>', 'Ação que o nosso comando vai realizar')
// agora adicionamos uma função para ser executada quando rodarmos o 
// programa com os arqumentos nescessários:
.action(function (texto, prog) {
  // exibe o valor do argumento texto
  console.log('recebi o texto:', texto);
  // exibe o valor do programa/comando atual e o valor do 
  // argumento action está disponível em **prog.action**:
  console.log('informações:', prog);
});
// para executar os comandos do nosso programa e carregar todos os 
// argumentos e opções você deve rodar a linha abaixo em seu 
// arquivo executável:
program.parse(process.argv);
```

#### 3.3- Adicionando a parte de alteração do texto:

Vamos mudar a função de .action por algo funcional:

```js
.action(function (texto, prog) {
  // carrega o texto:
  var text = S( texto );
  // mostra o texto formatado no terminal
  console.log( text[ prog.action ]().s );
});
```

No código acima estamos usando o modulo string para carregar o texto e depois aplicar a ação pedida pelo usuário.

Para mais informações como o modulo string funciona acesse: http://stringjs.com/

### 4 Código final:

Arquivo **bin/muda-texto.js**

```js
#! /usr/bin/env node

// modulos que vamos usar nesse comando:
var program = require('commander');
var S = require('string');
// registra um novo comando e parâmetros para esse comando, 
// no caso temos 1 argumento obrigátório e 1 opção para selecionar a ação:
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
// Lê os argumentos do comando atual e prepara para a execução 
// da ação relacionada:
program.parse(process.argv);
// Se o usuário não passar nenhum argumento ele vai exibir um texto:
if (!program.args.length) {
  console.log('O comando não foi encontrato, use o comando'+
  ' "muda-texto -h" para ver todas as opções disponíveis.');
}

```

## +informação

- Documentação do commander: https://www.npmjs.com/package/commander
- É possível criar subcomandos como `muda-texto capitalize 'oi mundo'` onde o capitalize é um subcomando

## Links e referências:

- Modulo npm para criar comandos: https://www.npmjs.com/package/commander
- Modulo npm para manipular textos: https://www.npmjs.com/package/string

## Próximo conteúdo

https://github.com/albertosouza/mini-cursos/blob/master/cli/2_2_comando_exibir_coracao.md
