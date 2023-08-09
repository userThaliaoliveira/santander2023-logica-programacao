// 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.
// Solicita ao usuário um ano e armazena na variável 'ano'
let ano = parseInt(prompt("Digite um ano:"));

// Verifica se o ano é bissexto de acordo com as regras
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(ano + " é um ano bissexto.");
} else {
    console.log(ano + " não é um ano bissexto.");
}
