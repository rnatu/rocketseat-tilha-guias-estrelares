// https://youtu.be/klgtCYfpYyU?t=1597

//# Lexical Scope
/*
1. Parecido com o inner, é o acesso que uma função interna tem de
uma variável do escopo pai, mesmo essa função sendo chamada num escopo
fora do escopo pai
*/

const message  = 'Global'

function createMessage() {
  const message = 'Minha mensagem';

  function myMessage() {
    console.log(message);
  }

  return myMessage;
}

const m = createMessage();
m();


// Temos conceito de closure envolvido aqui
