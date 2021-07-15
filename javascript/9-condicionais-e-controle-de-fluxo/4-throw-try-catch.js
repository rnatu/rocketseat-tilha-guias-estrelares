//# throw
function sayMyName(name = "") {
  if (name === "") {
    throw ("Nome é obrigatório"); // para a execução da FUNÇÃO se houver try catch, se NÂO houver trava a APLICAÇÃO toda!!
  }
  console.log("Depois do erro");
}

//# try...catch
try {
  sayMyName()
} catch(e) {
  console.log(e);
}

console.log('Após try catch')
