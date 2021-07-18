//# var é global e, também local

//! var x; HOISTING
console.log("> existe x antes do bloco?", x); // undefined

{
  var x = 0;
}

console.log("> existe x depois do bloco?", x); // 0
