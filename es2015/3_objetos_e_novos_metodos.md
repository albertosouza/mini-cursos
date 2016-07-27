# Objetos e novos métodos

## Object initializer shorthand

O *Object initializer shorthand* é uma forma mais simples e menor para definir atríbutos ao criar objetos. 
Ao definir um atríbuto de um objeto com o mesmo nome de uma variável disponível no escopo atual não precisamos definiro valor do atríbuto por exemplo `name: name` pode ser definido apenas com `name,`

```js
function buildAccount(name, lastName) {
  let displayName = name + ' ' + lastName;

  return {
    // forma mais simples para não escrever: name:name
    name,
    lastName,
    displayName,
    // set normal variables
    active: false,
    isNew: false,
    // forma mais simples para adicionar uma função em um objeto:
    isActive() {
      return this.active;
    },
  };
}
// exibe o objeto retornado:
console.log(buildAccount('bat', 'man'));
```

Também é possível definir funções em novos objetos usando uma sintax mais simples como podemos ver no código acima na função `isActive`

## Object destructuring or Destructuring assignment

O *destructuring assignment* permite extrair atríbutos de um objeto e adiciona-los em variáveis.

Exemplo:

```js
// objeto de exemplo:
let pessoa = { name: 'Batman', isRich: true };
// cria as variáveis name e isRich:
let { name, isRich } = pessoa;
// exibindo valores das variáveis
console.log(name); // Batman 
console.log(isRich); // true 
```

Tambem é possível definir valores customizados para as variáveis:

```js
let pessoa = { name: 'Batman', isRich: true };
// É possível adicionar os valores dos atríbutos em novas váriáveis, ex:
let { name: n, isRich: r } = pessoa;
 
console.log(n); // Batman 
console.log(r); // true 
```

### Array destructuring

O *array destructuring* funciona iqual ao *object destructuring* mas trocando os {} por []. Por exemplo:

```js
let pessoas = ['Batman', 'Jaspion', 'Deadpool'];
// é possível pular itens no array:
let [ hero1, ,hero3 ] = pessoas;
 
console.log(hero1); // Batman
console.log(hero3); // Deadpool 
```

## Próximo conteúdo:

[Strings and template strings](4_string_template_strings.md)