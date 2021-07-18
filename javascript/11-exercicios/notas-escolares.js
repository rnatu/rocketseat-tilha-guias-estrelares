/*
# Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima    -    A
* entre 80 - 89      -    B
* entre 70 - 79      -    C
* entre 60 - 69      -    D
* menor que 60       -    F

*/

const getScore = (score) => {
  const scoreA = score >= 90 && score <= 100;
  const scoreB = score >= 80 && score <= 89;
  const scoreC = score >= 70 && score <= 79;
  const scoreD = score >= 60 && score <= 69;
  const scoreF = score < 60 && score >= 0;

  if (scoreA) {
    return "A";
  } else if (scoreB) {
    return "B";
  } else if (scoreC) {
    return "C";
  } else if (scoreD) {
    return "D";
  } else if (scoreF) {
    return "F";
  } else {
    return "Nota inválida";
  }
};

console.log(getScore(98));
console.log(getScore(28));
console.log(getScore(-8));
console.log(getScore(73));
