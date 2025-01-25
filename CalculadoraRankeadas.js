// Calculadora de partidas Rankeadas
// Autor Leonardo Almeida 


//Função que irá calcular o Saldo de Vitórias
function calculoVitorias (vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;

}

//Função que irá calcular nível de Rank
function nivelRankeado (saldoVitorias){

    let nivelRankeado

    if (saldoVitorias < 10) {
        nivelRankeado = Ferro}

    else if (saldoVitorias >= 11 && saldoVitorias <= 20) {nivelRankeado = "Bronze"}
    else if (saldoVitorias >= 21 && saldoVitorias <= 50) {nivelRankeado = "Prata"}
    else if (saldoVitorias >= 51 && saldoVitorias <= 80) {nivelRankeado = "Ouro"}
    else if (saldoVitorias >= 81 && saldoVitorias <= 90) {nivelRankeado = "Diamante"}
    else if (saldoVitorias >= 91 && saldoVitorias <= 100) {nivelRankeado = "Lendário"}
    else if (saldoVitorias >= 101) {nivelRankeado = "Imortal"}

    else {nivelRankeado = "Desconhecido"}

    return nivelRankeado;
}

// Função principal
function exibirMensagem(vitorias, derrotas) {
    let saldoVitorias = calculoVitorias(vitorias, derrotas);
    let nivel = nivelRankeado(saldoVitorias);

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Teste da função
exibirMensagem(100, 20); 