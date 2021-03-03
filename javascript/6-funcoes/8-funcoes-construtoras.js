/*
  Function() constructor

  * expressão new
  * cria um novo objeto
  * this keyword - uso da palavra this para referenciar á instância
*/

function Person(name, lastName) {
  //# Atributos privados
  const id = 123456;

  //# Métodos privados
  const metodoInterno = function() {
    console.log(`Sou um método interno, o numero do id privado é ${id}`);
  }


  //# Atributos públicos
  this.name = name;
  this.lastName = lastName;

  //# Métodos públicos
  this.sayMyName = function() {
    console.log(`Meu nome é ${this.name} ${this.lastName}`);
  }

  this.showPrivatedMethod = function() {
    metodoInterno();
  }
}


const teacher = new Person('Mayk', 'Brito');
const student = new Person('Renato', 'Xavier');

console.log(teacher)
console.log(teacher.name)
teacher.sayMyName();
console.log('')

console.log(student.lastName);
student.sayMyName();

console.log('')
student.showPrivatedMethod();
