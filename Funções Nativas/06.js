// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.
// Array de exemplo com valores numéricos
let valores = [10, 5, 8, 3, 9];

// Utiliza a função reduce() para somar todos os valores no array
let soma = valores.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
}, 0);

// Calcula a média dividindo a soma pelo número de elementos (length) do array
let media = soma / valores.length;

// Exibe a média calculada
console.log("A média dos valores é: " + media);
