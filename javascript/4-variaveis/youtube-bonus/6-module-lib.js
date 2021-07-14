/* com CommonJS funciona todos os modos de criação de variável,
no ES6 a criação de variável sem a utilização de palavra chave como const, let ou var não ira funcionar
*/
const message = "Hello World";

// exportando do módulo apenas a mensagem utilizando CommonJS
//% Para funcionar no code runner, que utiliza node, deve ser feito utilizando CommonJS
module.exports = message;
