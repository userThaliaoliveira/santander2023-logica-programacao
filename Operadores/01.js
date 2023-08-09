// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.
// Solicita ao usuário o comprimento do retângulo e armazena na variável 'comprimento'
let comprimento = parseFloat(prompt("Digite o comprimento do retângulo:"));

// Solicita ao usuário a largura do retângulo e armazena na variável 'largura'
let largura = parseFloat(prompt("Digite a largura do retângulo:"));

// Calcula a área do retângulo multiplicando o comprimento pela largura e armazena na variável 'area'
let area = comprimento * largura;

// Exibe a área calculada na tela
console.log("A área do retângulo é: " + area);
