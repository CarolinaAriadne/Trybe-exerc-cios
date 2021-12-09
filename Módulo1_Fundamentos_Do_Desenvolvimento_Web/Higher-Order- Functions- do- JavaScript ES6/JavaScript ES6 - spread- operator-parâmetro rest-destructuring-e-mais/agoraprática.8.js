// escreva greet abaixo

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params .

const greet = (user = 'John') => console.log(`Hi ${user}`);

greet();

const greet2 = (name, msg = 'Hi') => (`${msg} ${name}`);


console.log(greet2('John'));

console.log(greet2('Isabela'));