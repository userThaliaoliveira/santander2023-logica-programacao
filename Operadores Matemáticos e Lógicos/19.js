//  19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.
function ehPositivoEImpar(numero) {
    return numero > 0 && numero % 2 !== 0;
}

// Teste com diferentes números
console.log(ehPositivoEImpar(5));   // true (positivo e ímpar)
console.log(ehPositivoEImpar(-3));  // false (não é positivo)
console.log(ehPositivoEImpar(4));   // false (não é ímpar)
console.log(ehPositivoEImpar(0));   // false (não é positivo)
