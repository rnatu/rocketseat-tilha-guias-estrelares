/*
# Fluxo de caixa familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
* receitas: []
* despesas: []

Agora, crie uma função que irá calcular o total de receitas e
despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo
*/

const family = {
  incomes: [2500, 3200, 250.43, 360.45], // 6310.88
  expenses: [320.34, 128.45, 176.87, 1450, 00], //2075.66
};

function calcTotalIncomes(family) {
  let total = 0;

  for (value of family.incomes) {
    total += value;
  }

  return total;
}

function calcTotalExpenses(family) {
  let total = 0;

  for (value of family.expenses) {
    total += value;
  }

  return total;
}

function balance() {
  const totalIncomes = calcTotalIncomes(family);
  const totalExpenses = calcTotalExpenses(family);

  const calcTotal = totalIncomes - totalExpenses;
  const totalValue = calcTotal.toFixed(2);

  if (totalValue > 0) {
    console.log(`Seu saldo é positivo no valor de: R$${totalValue}`);
  } else if (totalValue < 0) {
    console.log(`Seu saldo é negativo no valor de: R$${totalValue}`);
  } else if (totalValue === 0) {
    console.log(`Seu saldo é: R$${totalValue}`);
  } else {
    console.log("Conta inválida");
  }
}

balance();
