//# if...else

//medir a febre
let temperature = 36;
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.7 && temperature >= 37
let normalTemperature = temperature < 37

if (highTemperature) {
  console.log("Febre alta");
} else if (mediumTemperature) {
  console.log("Febre moderada");
} else {
  console.log("Saudável");
}

//if com um linha só de código
if (normalTemperature) console.log('Temperatura normal')
