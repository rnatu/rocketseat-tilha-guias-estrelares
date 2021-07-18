// Manipulando Arrays

// Contar elementos de um array

let myArray = [
  "a",
  2,
  function () {
    return "olá";
  },
  { color: "red" },
];
console.log(myArray.length);

console.log("Executando a função que está no array ->", myArray[2]());

console.log(
  "Acessando a chave color do objeto dentro do array ->",
  myArray[3].color
);

console.log("");

let myObjArray = [
  {
    color: "red",
    model: "redmi",
  },
  {
    color: "black",
    model: "samsung",
  },
];

console.log(myObjArray.length);
