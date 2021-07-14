// https://youtu.be/klgtCYfpYyU?t=438

//# Block Scope
// 1. Cria um escopo local
{
  // const boosting = "Boosting People";
  // console.log(boosting) //* Boosting People
}
// console.log(boosting) //! ReferenceError: boosting is not defined

// 2. Pode ser if, for, while...
for (let char of ['a', 'b', 'c']) {
  // const boosting = "Boosting People";
  // console.log(boosting) //* Boosting People -> 3 vezes
}
// console.log(boosting) //! ReferenceError: boosting is not defined

// 3. O que acontece se eu mudar de const para let ou var?
if (true) {
  // let letBoosting = 'Boosting People';
}
// console.log(letBoosting); //! ReferenceError: boosting is not defined
if (true) {
  var varBoosting = 'Boosting People';
}
console.log(varBoosting); //! 'Boosting People' <- Var não respeita escopo de bloco
