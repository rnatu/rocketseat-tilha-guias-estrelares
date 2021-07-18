//callback function - Receber uma função como parametro, para ser executada na função ou utilizado o retorno
function sayMyName(callbackfn) {
  console.log("Antes de executar a função callback");

  callbackfn();

  console.log("Depois de executar a função callback");
}

sayMyName(() => {
  console.log("Estou em uma callback, Meu nome é Renato");
});

console.log("");
const sayMyLastName = (lastName) => lastName;

const entireName = (callback) => console.log(`meu sobrenome é ${callback}`);

entireName(sayMyLastName("Xavier"));
