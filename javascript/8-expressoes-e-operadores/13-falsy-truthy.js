// Type conversion -> Transformando a string '10' em numero
console.log(Number('10') + 5); // 15

// Type coercion ou Type conversion -> JavaScript transformando por baixo dos planos o 5 em string '5'
console.log('9' + 5) //95

/*
  FALSY é um Type coercion do JavaScript
  Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops )

  false
  0
  -0
  ""
  null
  undefined
  NaN
*/
console.log( null ? 'verdadeiro' : 'falso')

/*
  TRUTHY é um Type coercion do JavaScript
  Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops )

  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  Infinity
  -Infinity
*/
console.log( {} ? 'verdadeiro' : 'falso')

