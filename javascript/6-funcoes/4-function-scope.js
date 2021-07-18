// function scope

let subject = "Create video";

function createThink() {
  subject = "Study"; // manipulando a variável
  return subject;
}

function createThink2(subject) {
  subject = "Do excercise"; //manipulando o parametro
  return subject;
}

console.log(createThink());

console.log(createThink2(subject));

console.log(subject);
