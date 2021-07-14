// https://youtu.be/klgtCYfpYyU?t=324

//# Definir variável e usar ela na próxima linha
// const message = "Fala Dev";
// console.log(message); //* Fala Dev

//# Usar uma variável antes da sua definição
// console.log(message);
// const message = "Fala Dev"; //! ReferenceError: Cannot access 'message' before initialization

// Definir variável dentro de um if e usar ela fora do if
if (true) {
  const message = 'Boosting people';
}
console.log(message); //! ReferenceError: message is not defined
