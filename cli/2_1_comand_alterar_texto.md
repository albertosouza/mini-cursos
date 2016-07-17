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

1.1- Para registrar esse comando temos que adiciona-lo na configuração **bin** do **package.json** :

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

2.2- Crie o arquivo **muda-texto.js** na pasta **bin** com o conteúdo:

```js
#! /usr/bin/env node

console.log('vamos mudar o texto, TODO!')
```

2.3- Rode o npm link novamente

```sh
npm link
```

OBS: Pode ser nescessário usar o sudo antes do comando acima.

2.4- Testando

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

3.1- Carregando os modulos que vamos usar no nosso comando:

Adicione as linhas`abaixo no arquivo **muda-texto.js**:

```js
var program = require('commander');
var S = require('string');
```

3.2- Usando o comander para configurar um comando:

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

## +informação

- Documentação do commander: https://www.npmjs.com/package/commander
- É possível criar subcomandos como `muda-texto capitalize 'oi mundo'` onde o capitalize é um subcomando

## Links e referências:

- Modulo npm para criar comandos: https://www.npmjs.com/package/commander
- Modulo npm para manipular textos: https://www.npmjs.com/package/string
