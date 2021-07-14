// https://youtu.be/klgtCYfpYyU?t=1418

//# Inner Scope
// 1. Um escopo dentro de outro ex.:
// Função dentro de função ou if dentro de função
{
  const message = 'Mensagem nova';
  {
    {
      console.log(message); // Mensagem nova
    }
  }
}

// outro exemplo
const message = 'Minha message'

function sayHello() {
  const message = 'Hello World!'

  if(true) {
    console.log(message)
  }
}
sayHello() // console.log(message) // Hello World!

console.log(message) // Minha message

//! LEMBRANDO QUE O VAR NÃO RESPEITA ESCOPO
{
  {
    {
      var fullName = 'Renato Xavier';
    }
  }
}
console.log(fullName); //! 'Renato Xavier'
