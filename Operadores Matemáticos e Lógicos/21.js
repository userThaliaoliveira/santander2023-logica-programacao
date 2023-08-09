//  21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos).
// Lista de membros banidos
let membrosBanidos = ["João", "Maria", "Carlos"];

// Função para verificar permissão de entrada
function verificarPermissao(nome, idade) {
    if (idade >= 18 && membrosBanidos.indexOf(nome) === -1) {
        return "Permissão concedida. Bem-vindo(a)!";
    } else if (idade < 18) {
        return "Desculpe, você não tem idade suficiente para entrar.";
    } else {
        return "Desculpe, você está na lista de membros banidos.";
    }
}

// Teste da função com diferentes casos
console.log(verificarPermissao("Ana", 22));     // Permissão concedida. Bem-vindo(a)!
console.log(verificarPermissao("João", 30));    // Desculpe, você está na lista de membros banidos.
console.log(verificarPermissao("Lucas", 15));   // Desculpe, você não tem idade suficiente para entrar.
