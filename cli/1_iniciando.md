## Introdução:

Nesse mini curso / tutorial vamos aprender a criar programas de linha de comando ou *Command-Line Interface Applications* mais conhecido como [**CLI**](https://pt.wikipedia.org/wiki/Linha_de_comandos)

> Um programa de linha de comando pode ter subcomandos, receber argumentos e receber opções
> 
> Um subcomando é um comando onde o primeiro argumento vai executar uma ação usando os argumentos posteriores como argumentos e opções do subcomando
> 
> Uma opção recebe um `-` ou `--` antes de seu nome. Ex: `--action`
> 
> Exemplo de subcomando: muda-texto capitalize 'oi mundo'<br>
> Exemplo de comando com argumento: muda-texto 'oi mundo'<br>
> Exemplo de comando com opções: muda-texto 'oi mundo' --action='capitalize'

### Exemplos de uso:

- Executar pequenas tarefas no servidor como lipar um cache 
- Executar tarefas como atualizar modulos: https://www.npmjs.com/package/npm-check-updates
- Gerar estrutura de arquivos
- Enviar emails de notificação agrupados periodicamente

### Iniciando:

Vamos iniciar com um novo projeto criando uma pasta e usando o comando `npm init`

```sh
mkdir muda-texto # cria a pasta do nosso modulo
cd muda-texto # entra na pasta
npm init -y # cria o arquivo package.json
```

<img src="http://res.cloudinary.com/we-js/image/upload/v1468731688/cursos/cli/muda-text-npm-init.gif" alt="Imagem exibindo o passo a passo de criar uma pasta e depois criar um arquivo package.json usando o comando npm init">

Os comandos são registrados na configuração "bin" do arquivo **package.json** do modulo. 

Vamos criar um comando simples que vai exibir o texto "Walter White" no terminal usando o comando `say-my-name`

##### 1- Primeiro precisamos registrar o arquivo que vai conter o código do nosso comando no **package.json** na configuração **bin**

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
    "say-my-name": "bin/say-my-name.js"
  }
}
```

##### 2- Para ficar mais coerente vamos usar a pasta bin com o nome do arquivo **say-my-name.js**:

Crie a pasta **bin** e um novo arquivo com nome **say-my-name.js** na pasta atual do projeto.

O conteúdo do arquivo bin/say-my-name.js vai ser: 

```js
#! /usr/bin/env node

console.log('Walter White');
```

A primeira linha indica que esse arquivo será executável com o node.js

##### 3- Deixando o comando disponível em todos os terminais / consoles

Para deixa o comando disponível em todos os terminais ele precisa estar instalado ou *linkado* no contexto global.

Já que estamos desenvolvendo nossa aplicação vamos linkar ela no contexto global com o comando npm link rodado na pasta do modulo (mesma pasta do package.json):

```sh
npm link 
```

OBS_1: Pode ser nescessário o uso de sudo dependendo da sua configuração do node.js
OBS_2: Uma outra forma é instalar o modulo como um global usando o argumento -g no comando `npm install -g` mas recomendo só usar esse recurso com modulos desenvolvidos.

##### 4- Rodando

Agora o comando **say-my-name** vai estar disponível no seu terminal. Exemplo:

<img src="http://res.cloudinary.com/we-js/image/upload/v1468731300/cursos/cli/say-may-name-command.gif" alt="Imagem mostrando o uso do comando say-my-name">

## +informação

- Você pode ver os dados relacionados ao comando em execução com o `console.log(process)`
- Os argumentos do comando executado ficam disponíveis na variável **process.argv** (vamos usar um modulo para trata-los no curso)
- O `console.log` envia textos para o terminal e aceita formatações ex: `\n`  para pular linha ou `\t` para identação (tab)

## Próximo conteúdo do curso:

Link: [Criando um comando para alterar textos](2_1_comand_alterar_texto.md)

## Links e referências:

- LinK da documentação do npm init em inglês: https://docs.npmjs.com/cli/init
- Sobre CLI na Wikipedia: https://pt.wikipedia.org/wiki/Linha_de_comandos
- Tutorial de como criar comandos cli do Igor Santana na tableless: http://tableless.com.br/criando-aplicacoes-cli-utilizando-node-js/



