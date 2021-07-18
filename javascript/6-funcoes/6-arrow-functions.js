// arrow function expression

//! não sofre hoisting
const sayMyName = () => {
  console.log("Renato");
};
sayMyName();

// se houver só uma linha de código dentro da função, poderá ser escrita assim:
const sayMyLastName = (lastName) => console.log(lastName);
sayMyLastName("Xavier");
