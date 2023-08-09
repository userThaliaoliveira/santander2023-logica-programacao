// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.
function saoIguaisIgnorandoCase(str1, str2) {
    // Transforma ambas as strings em minúsculas para comparação insensível a maiúsculas/minúsculas
    let str1Minuscula = str1.toLowerCase();
    let str2Minuscula = str2.toLowerCase();
    
    // Compara as strings transformadas para verificar igualdade
    return str1Minuscula === str2Minuscula;
}

// Solicita ao usuário duas strings e armazena nas variáveis 'string1' e 'string2'
let string1 = prompt("Digite a primeira string:");
let string2 = prompt("Digite a segunda string:");

// Chama a função saoIguaisIgnorandoCase e passa as duas strings como argumentos
if (saoIguaisIgnorandoCase(string1, string2)) {
    console.log("As strings " +string1 ,string2, "são iguais.");
} else {
    console.log("As strings " +string1 ,string2, "são diferentes.");
}
