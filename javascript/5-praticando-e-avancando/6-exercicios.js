// 1 - Declare uma variável de nome weight
let weight;

// 2 - Que tipo de dado é a variável acima?
console.log('questão 2',typeof weight) // undefined
/*
  3 - Declare uma variável e atribua valores para cada um dos dados:
    * name: string
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/
let firstName = 'Renato';
let age = 30;
let stars = 25.5;
let isSubscribed = false;

/*
  4 - A variável student abaixo é de que tipo de dados?

  4.1 - Atribua a ela as mesmas propriedades e valores do exercício 3.

  4;2 Mostre no console a seguinte mensagem:

    <firstName> de idade <age> e possui <stars> estrelas;

    Atenção, substitua <firstName> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {};

console.log('questão 4',typeof student); // 4 - object

// 4.1
student = {
firstName: 'Renato',
age: 30,
stars: 25.5,
isSubscribed: false,
}

console.log('questão 4.1',student);

console.log('questão 4.2',
  `${student.firstName} de idade ${student.age} e possui ${student.stars} estrelas`
)

/*
  5 - Declare uma variável do tipo Array, de nome students e atribua a ela nenhuma valor, ou seja, somente o Array vazio
*/

let students = [];

/*
  6 - Reatribua valor para cada variável acima, colocando dentro dela o objeto student na questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
  student
]

console.log('questão 6', students);

/*
  7 - Coloque no console o valor da posição zero do Array acima
*/
console.log('questão 7', students[0]);

/*
  8 - Crie um novo student e coloque na porição 1 do Array students
*/

const newStudent = {
  firstName: 'Carol',
  age: 25,
  stars: 21.7,
  isSubscribed: true,
  }

students[1] = newStudent
console.log('questão 8',students)

/*
  9 - Sem rodar o código responda qual é a resposta do código abaixo e porque?
      Após sua resposta, rode o código e veja se você acertou.

      console.log(a)
      var a = 1;

      R: undefined, pois ocorreu o hoisting por ser var, ficando como o código abaixo:

      var a;
      console.log(a);
      a = 1;
*/

console.log('questão 9', a)
var a = 1;
