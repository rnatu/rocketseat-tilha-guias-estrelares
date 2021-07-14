// https://youtu.be/klgtCYfpYyU?t=966

//# Function Scope
// 1. Cria escopo para: const, let e var
function createMessage() {
  var loginMessage = 'Welcome user!';
  let logoffMessage = 'Bye user!';
  message = 'Heloooo'
}
createMessage();
// console.log(loginMessage) //! loginMessage is not defined
// console.log(logoffMessage) //! logoffMessage is not defined
// console.log(message) //! Heloooo

