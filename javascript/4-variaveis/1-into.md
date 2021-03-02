# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
  * var
  * let
  * const

```js
// var
var clima = "Quente";
clima = "frio";

// let
let hora = "14:10";
hora = "19:30";

// const
const mes = "janeiro";
```

O JS é uma linguagem fracamente tipada e dinâmica

* Variáveis não precisam ter um tipo previamente definido
* Podemos mudar o contéudo da variável (var e let);

```js
let clima = true; //boolean
clima = ""; //string

console.log(typeof clima); //string
```

## Scope

* Escopo determina a visibilidade de alguma variável no JS

### block statement

```js
// vamos iniciar um bloco
{
  // aqui dentro é um bloco e posso colocar
  // qualquer código
} // aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`
