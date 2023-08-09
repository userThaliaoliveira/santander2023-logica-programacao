// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).
// Solicita ao usuário um número e armazena na variável 'numero'
let numero = parseInt(prompt("Digite um número:"));

// Verifica se o resto da divisão do número por 2 é igual a 0
if (numero % 2 === 0) {
    console.log(numero + " é um número par.");
} else {
    console.log(numero + " é um número ímpar.");
}
