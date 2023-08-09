// 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.
function concatenarListas(lista1, lista2) {
    return lista1.concat(lista2);
}

// Duas listas de exemplo
let listaA = [1, 2, 3];
let listaB = [4, 5, 6];

// Chama a função concatenarListas e passa as duas listas como argumentos
let listaResultado = concatenarListas(listaA, listaB);

// Exibe a lista resultante
console.log("Lista concatenada: " + listaResultado);
