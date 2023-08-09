//  16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.
// Declaração de uma função
function minhaFuncao() {
    console.log("Isso é uma função.");
}

// Verifica se a variável é do tipo função usando o operador typeof
let minhaVariavel = minhaFuncao;
let ehFuncao = typeof minhaVariavel === 'function';

// Exibe o resultado da verificação
if (ehFuncao) {
    console.log("A variável é uma função.");
} else {
    console.log("A variável não é uma função.");
}
