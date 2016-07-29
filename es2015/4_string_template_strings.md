# Template strings

> Template strings são envolvidas por crases (` `) em vez de aspas simples ou duplas. Template strings podem possuir marcadores. Estes são indicados pelo sinal de dólar seguido de chaves (${expression}). As expressões nos marcadores, bem como o texto em volta delas são passados à uma função. A função padrão apenas concatena as partes em uma string única.  Se existir uma expressão precedendo a template string (função tag exemplo),  a template string é definida como "tagged template string". No caso, a expressão tag (geralmente uma função) é chamada pela template string processada, que você pode manipular antes de produzir o resultado.
> *from [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings)*

Exemplo:

```js
// um texto simples:
`corpo de texto`
// usando várias linhas:
`texto linha 1
 texto linha 2`
// usando uma variável:
`texto string ${expression} texto string`
```
*código do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings)*

## Saiba mais

Recomendo o texto do MDN sobre *template strings*:

Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings

## Próximo conteúdo:

[Arrays, maps e sets](5_arrays_maps_sets.md)