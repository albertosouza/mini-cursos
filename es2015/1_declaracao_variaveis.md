# Declaração de variáveis: let e const

Nesse conteúdo vamos falar das 2 novas formas de declarar váriaveis no código javascript, o **let** e o **const**.

A idéia é que o **let** deve substituir o **var** como a forma padrão para declarar variáveis e com o tempo o var não será mais usado. <br>
O **const** deve ser usado para declarar váriaveis onde o valor ou referência não será alterado. 

o var define uma variável no escopo da função onde é definida e quando o código é executado o compilador utilizar o metodo chadado de hoisting pegando todas as variáveis definidas com var e movendo elas para o início da função.

Exemplo sobre o hoisting:<br>
O código abaixo:

```js
function soma (num1, num2) {
  if (num1 && num2) {
    var resultado = num1 + num2;
  }
  return resultado;
}
```

Ao ser executado e após o hoisting o javascript vai executar a função da seguinte forma:

```js
function soma (num1, num2) {
  var resultado;

  if (num1 && num2) {
    resultado = num1 + num2;
  }

  return resultado;
}
```

Apesar da variável estar sendo declarada em um if, com o var ela sempre será definida no início da função.
No exemplo acima se executar a função com `soma()` ela vai retornar **undefined**

## let

O `let` permite definir uma variável no bloco de código atual, dessa forma quando definimos uma variável com o `let` dentro de um bloco de código de um `if` ela não vai estar disponível no contexto acima (normalmente uma função)
O `let` tem outros efeitor úteis como o de ao ser usado em um `for` a cada execução do loop ele vai gerar uma nova variável com o mesmo nome evitando que o valor mude de acordo com o avanço do `for`

Vamos ver alguns exemplos:

`let` usado em um bloco de código `if` :

```js
function soma (num1, num2) {
  if (num1 && num2) {
    // definindo a variável resultado dentro:
    let resultado = num1 + num2;
    // o let permite que o valor da variável seja alterado diferente do const:
    resultado = resultado + 3;
  }
  // essa linha abaixo vai exibir um erro pois o resultado só está definido dentro do bloco do if acima e por isso não está disponível em toda a função:
  return resultado;
}
```

Se executado com `soma(2, 3)` o exemplo acima vai exibir o erro `ReferenceError: resultado is not defined` 

Corrigindo o código acima:

```js
function soma (num1, num2) {
  // definindo a variável no início da função para ficar disponível em todos os blocos internos:
  let resultado;

  if (num1 && num2) {
    // usando a variável definida no escopo acima
    resultado = num1 + num2;
    // o let permite que o valor da variável seja alterado diferente do const:
    resultado = resultado + 3;
  }
  // essa linha abaixo vai exibir um erro pois o resultado só está definido dentro do bloco do if acima e por isso não está disponível em toda a função:
  return resultado;
}
```

Agora nosso código vai funcionar normalmente. Ao excutar `soma(2, 3)` ele vai retornar `8` e ao executar `soma()` ele vai retornar `undefined` mas não vai ocorrer erros.

No caso de uso do `let` com o `for`, a cada loop o javascript gera um novo i com o valor e assim mantendo o valor atual do i dentro do bloco de código do `for`

Exemplo de uso do `let` com `for`:

```js
// uma função assíncrona 
function getData(cb) {
  setTimeout(function(){
    cb();
  }, 100);
}
// uma função de exemplo:
function test() {
  // o let gera uma nova variável i para cada execução:
  for (let i = 0; i < 3; i++) {
    getData(function(){
      // usando o let o escopo dentro do bloco do for se mantém e 
      // valor de i em cada execução se mantém:
      console.log('valor do i: '+ i);
    })
  }
}
test(); // executando ...
```

O exemplo acima vai exibir o resultado:

```
valor do i: 0
valor do i: 1
valor do i: 2
```

Mesmo executando um for com uma função assíncrona o valor exibido na função interna está correta. 

## const

A  declaração `const` cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.<br>
*from [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)*

```js
// define my_fav como uma constante e atribui o valor 7
const my_fav = 7;

// isto falha mas não emite erros no Firefox e Chrome (porém não falha no Safari)
my_fav = 20;

// retorna 7
console.log("my favorite number is: " + my_fav);

// tentar redeclarar a constante emite um erro 
const my_fav = 20;

// o nome my_fav está reservado para a constante acima, logo também irá falhar
var my_fav = 20; 

// my_fav ainda é 7
console.log("my favorite number is " + my_fav);

// Atribuir valores a uma variável const é um erro de sintaxe
const a = 1; a = 2;

// const deve ser inicializada
const foo; // SyntaxError: missing = in const declaration

// const também funciona com objetos
const myObject = {"key": "value"};

// Sobrescrever o objeto também falha (no Firefox e Chrome but mas não no Safari)
myObject = {"otherKey": "value"};

// Entretando, atributos de objetos não estão protegidos,
// logo a seguinte instrução é executada sem problemas 
myObject.key = "otherValue";
```
*code from [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)*

## Próximo conteúdo

(Arrow functions)[2_arrow_functions.md]
