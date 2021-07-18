//toda função retorna algo, quando não especificado, retorna undefined
const sum = function (number1, number2) {
  let total = number1 + number2;
  return total;
};

let num1 = 550;
let num2 = 350;
sum(num1, num2);

console.log(`o número 1 é ${num1}`);
console.log(`o número 2 é ${num2}`);
console.log(`a soma é ${sum(num1, num2)}`);
