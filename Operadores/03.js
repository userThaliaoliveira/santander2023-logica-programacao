// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".
function verificaJavaScript(string) {
    // Transforma a string em minúsculas para fazer uma comparação não sensível a maiúsculas/minúsculas
    let stringMinuscula = string.toLowerCase();
    
    // Verifica se a string transformada contém a palavra "javascript"
    if (stringMinuscula.includes("javascript")) {
        return true;
    } else {
        return false;
    }
}

// Solicita ao usuário uma string e armazena na variável 'entrada'
let entrada = prompt("Digite uma frase ou palavra:");

// Chama a função verificaJavaScript e passa a entrada do usuário como argumento
if (verificaJavaScript(entrada)) {
    console.log("A string contém a palavra 'JavaScript'.");
} else {
    console.log("A string não contém a palavra 'JavaScript'.");
}
