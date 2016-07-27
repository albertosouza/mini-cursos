# Arrays, maps e sets

## `for` ... `of`

O `for of` permite pegar cada valor de um array diferente do `for` padrão que pega o índice de cada item no array, por exemplo:

```js
let tags = ["Saúde", "Educação", "Esporte"];

for (let tag of tags) {
  console.log(`tag>${tag}`);
}
```

No exemplo acima o `for of` pega cada tag no array de tags seguindo a ordem do array.

Para mais informações sobre `for of` acesse: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of

## Array.find()

`Array.find` permite buscar e retornar um item em um array usando uma função de busca, por exemplo:

```js
let numbers = [2, 3, 4, 5, 8, 12, 13];
// usando o array.find com `array functions` para pegar o primeiro número impar:
let result = numbers.find((element, index, array) =>  (element%2 == 1)? true: false );
console.log(result); //  vai exibir 3
```

## Maps



## Sets