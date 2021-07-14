// https://youtu.be/klgtCYfpYyU?t=675

//# Global Scope
// 1. É o maior escopo de todos, o que abrange todos
const message = 'hello';
if (true) {
  console.log(message); //* hello
}

// 2. Variável com var no Browser e o objeto window?
//case simulando a utilização no console do browser (para melhor entendimento, utilizar o console do browser)
//no browser a declaração de variáveis com var entra no objeto window do próprio browser automaticamente, oque não é recomendado!
var name = 'Renato';
console.log(window.name) //! 'Renato'


//no node esse tipo de declaração sem nenhuma palavra chave como var, let ou cost entra no objeto global do próprio node, oque não é recomendado!
messageWelcome = 'Welcome Renato';
console.log(global.messageWelcome) //! 'Welcome Renato'
