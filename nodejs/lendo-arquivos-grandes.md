# Lendo arquivos grandes com Node.js

Nesse screencast mostro como carregar arquivos e arquivos grandes usando Node.js

Quando precisamos trabalhar com um arquivo de dados muito grande não é possível carregar todo o seu conteúdo na aplicação mas podemos ir lendo e processando partes do arquivo.

Vamos ver 2 formas:

## 1 - usando o modulo readline do core do node.js

**Vantagem:** Não precisa instalar modulos da comunidade

Link: https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line

Exemplo, lendo o arquivo **country.txt**:

```js
const readline = require('readline');
const fs = require('fs');
// iniciamos com um stream de leitura no arquivo:
const rl = readline.createInterface({
  input: fs.createReadStream('country.txt')
});
// função que é executada a cada linha:
rl.on('line', (line) => {
  console.log('Line from file:', line);
});
// evento executado após ler todas as linhas do arquivo:
rl.on('close', () => {
  console.log('acabou!');
});

```

## 2 - Usando o modulo linebyline do NPM

**Vantagens:** é mais simples de usar pois já usa resolve coisas como o número da linha atual
**Desvantagens:** Precisa instalar o modulo `linebyline` 

Instale o module com `npm install --save linebyline`

Modulo: https://www.npmjs.com/package/linebyline

```js
const linebyline = require('linebyline');
let rl = linebyline('./country.txt');

rl.on('line', (line, lineCount, byteCount) => {
  // faça algo com a linha
  console.log(`Estou na linha: ${lineCount} com o valor ${line}`)
});

.on('error', (e) => {
  console.error(e)
  // deu erro!
});
```
