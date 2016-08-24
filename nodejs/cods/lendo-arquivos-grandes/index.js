'use strict'
/**
 * Exemplo usando o modulo do core do node.js readline:
 */

const readline = require('readline');
const fs = require('fs');
// iniciamos com um stream de leitura no arquivo:
const rl = readline.createInterface({
  input: fs.createReadStream('country.txt')
});
// função que é executada a cada linha:
rl.on('line', (line) => {
  console.log(`Linha: ${line}`);
});
// evento executado após ler todas as linhas do arquivo:
rl.on('close', () => {
  console.log('acabou!');
});