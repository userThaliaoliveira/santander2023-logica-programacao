// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.
function ehNumeroPrimo(numero) {
    if (numero <= 1) {
        return false; // Números menores ou iguais a 1 não são primos
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Encontrou um divisor, logo não é primo
        }
    }
    
    return true; // Se nenhum divisor foi encontrado, é primo
}

// Solicita ao usuário um número e armazena na variável 'numero'
let numero = parseInt(prompt("Digite um número:"));

// Chama a função ehNumeroPrimo e passa o número digitado como argumento
if (ehNumeroPrimo(numero)) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}
