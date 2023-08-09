// 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".
function obterDataHoraFormatada() {
    let dataAtual = new Date();
    
    let dia = String(dataAtual.getDate()).padStart(2, '0');
    let mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0, fevereiro é 1, e assim por diante
    let ano = dataAtual.getFullYear();
    
    let hora = String(dataAtual.getHours()).padStart(2, '0');
    let minuto = String(dataAtual.getMinutes()).padStart(2, '0');
    let segundo = String(dataAtual.getSeconds()).padStart(2, '0');
    
    let dataHoraFormatada = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    return dataHoraFormatada;
}

// Chama a função para obter a data e hora formatada
let dataHoraAtual = obterDataHoraFormatada();

// Exibe a data e hora formatada
console.log("Data e hora atual: " + dataHoraAtual);
