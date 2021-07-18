//# const e let são locais e só funcionam no escopo onde foi criada

// console.log('> existe x antes do bloco?', y); // y is not defined
{
  // console.log('> existe x antes?', y); // Cannot access 'y' before initialization
  let y = 0;
  console.log("> existe y", y); // 0
}
// console.log('> existe y depois do bloco?', y) //  y is not defined

let b = 22; //escopo global

{
  {
    {
      b = 0; //acessando variável do escopo global e atualizando o valor
      console.log("Dentro do escopo de bloco", b); // 0
    }
  }
}

console.log("Fora do escopo de bloco", b); // 0
