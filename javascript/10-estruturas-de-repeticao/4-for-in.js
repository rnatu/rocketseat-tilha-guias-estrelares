// for in
// object -> property
// array -> index

const person = {
  name: 'John',
  age: 30,
  weight: 88.6
}

for(property in person) {
  console.log(`${property} - ${person[property]}`)
}

console.log('');

const items = ['Caneta', 'Lápis', 'Caderno'];

for(item in items) {
  console.log(`${item} - ${items[item]}`)
}
