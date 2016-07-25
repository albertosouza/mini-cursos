# Let e const

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

Agora nosso código vai funcionar normalmente, ao excutar `soma(2, 3)` ele vai retornar `8` e ao executar `soma()` ele vai retornar `undefined` mas não vai ocorrer erros.

