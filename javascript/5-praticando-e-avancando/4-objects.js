const person = {
  name: "John",
  age: 21,
  weight: 88.6,
  isAdmin: true,
  address: {
    country: "Brasil",
    city: "São Paulo",
  },
};

person.age = 35;
person.favoriteColor = "Vermelho";

console.log(
  `
  ${person.name} tem ${person.age} anos e mora em ${person.address.city}
   sua cor favorita é ${person.favoriteColor}
  `
);

console.log(person);
