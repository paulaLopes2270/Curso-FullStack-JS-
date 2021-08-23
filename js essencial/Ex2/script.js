let nomePessoaMaisVelha = prompt("Qual é o nome da pessoa mais velha?")
let idadePessoaMaisVelha = prompt("Qual é a idade da pessoa mais velha?")

let nomePessoaMaisNova = prompt("Qual é o nome da pessoa mais nova?")
let idadePessoaMaisNova = prompt("Qual é a idade da pessoa mais nova?")

let diferencaIdade = idadePessoaMaisVelha % idadePessoaMaisNova;

let nomeIdadeVelha = confirm(`A pessoa mais velha é ${ nomePessoaMaisVelha } e tem ${ idadePessoaMaisVelha } anos`);

alert(`A diferença entre as idades é de: ${diferencaIdade} anos`)