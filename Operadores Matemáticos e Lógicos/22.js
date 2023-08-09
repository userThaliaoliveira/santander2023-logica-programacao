//  22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.
// Valores esperados para nome de usuário e senha
let usuarioEsperado = "thalia";
let senhaEsperada = "rosa";

// Solicita ao usuário nome de usuário e senha
let nomeUsuario = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");

// Verifica se o nome de usuário e a senha correspondem aos valores esperados
if (nomeUsuario === usuarioEsperado && senha === senhaEsperada) {
    console.log("Login bem-sucedido. Bem-vindo(a), " + nomeUsuario + "!");
} else {
    console.log("Login falhou. Nome de usuário ou senha incorretos.");
}
