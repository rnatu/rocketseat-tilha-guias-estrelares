// Manipulando Arrays

let techs = ['html', 'css', 'js', 'sql', 'ruby', 'python'];

// 1 -> adicionar um item no fim
techs.push('php')
console.log('1 ->', techs)

// 2 -> adicionar no começo
techs.unshift('java')
console.log('2 ->', techs)

// 3 -> remover do fim
techs.pop();
console.log('3 ->', techs)

// 4 -> remover do começo
techs.shift();
console.log('4 ->', techs)

// 5 -> PEGAR somente alguns elementos do array;
//! slice não modifica o array
//% utiliza elementos como argumentos, e não index. (2 argumento é opicional)
// seleciona a fatia a partir do item 2 até o final do item 3
console.log('5 ->', techs.slice(2, 4))
// os dois ultimos items do array
console.log('5.1 ->', techs.slice(-2))
// a partir do item 1 até o final do array
console.log('5.2 ->', techs.slice(1))

// 6 -> REMOVER 1 ou mais items em qualquer posição do array
//! splice modifica o array
//% utiliza como argumentos (qual o index inicial, e quantos elementos quero retirar)
// index inicial 1, remover 1 elemento
techs.splice(1,2)
// remover o ultimo index do array
techs.splice(-1)
console.log('6 ->', techs)

// 7 -> encontrar a posição de um elemento no array
console.log('7 ->', techs.indexOf('sql'));

// 8 -> verificar se o elemento existe no array
console.log('8 ->', techs.includes('html'));

// 9 -> verificar se um item existe no array, se exister fazer a exclusão do mesmo
let index = techs.indexOf('sql');
index === -1 ? console.log('Elemento não encontrado ou digitado incorretamente') : techs.splice(index, 1);
console.log('9 ->', techs)
