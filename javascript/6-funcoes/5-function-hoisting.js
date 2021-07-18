// function hoisting

sayMyName();
// declaration - statement
//! sofre hoisting
function sayMyName() {
  console.log("Renato");
}

sayMyLastName();
// expression
//! nao sofre hoisting (mesmo utilizando var);
var sayMyLastName = function () {
  console.log("Xavier");
};
