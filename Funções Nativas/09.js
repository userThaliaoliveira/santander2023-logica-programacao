//9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.
function gerarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

// Define os valores mínimo e máximo para gerar o número aleatório
let minimo = 1;
let maximo = 10;

// Chama a função para gerar um número aleatório entre minimo e maximo
let numeroAleatorio = gerarNumeroAleatorio(minimo, maximo);

// Exibe o número aleatório gerado
console.log("Número aleatório: " + numeroAleatorio);
