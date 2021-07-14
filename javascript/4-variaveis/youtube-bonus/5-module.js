// https://youtu.be/klgtCYfpYyU?t=1142

// ES6: Import - Export
//# Module Scope
// 1. Escopos no arquivo: Variáveis só são acessíveis no arquivo OU se forem exportadas

// Importando o módulo utilizando CommonJS
//% Para funcionar no code runner, que utiliza node, deve ser feito utilizando CommonJS
const message = require('./6-module-lib.js')
console.log(message) // Hello World
