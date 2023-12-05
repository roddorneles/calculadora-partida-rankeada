
function calculaNivelHeroi(qtdVitorias, qtdDerrotas){

    const saldoRankeados = qtdVitorias - qtdDerrotas;

    let nivelHeroi = "";

    // estruturas de if's aninhadas para verificar qual o nível do herói
    if  (qtdVitorias < 10){
        nivelHeroi = "Ferro";
    }
    else if (qtdVitorias <= 20 ){
        nivelHeroi = "Bronze";
    }
    else if (qtdVitorias <= 50 ){
        nivelHeroi = "Prata";
    }
    else if (qtdVitorias <= 80 ){
        nivelHeroi = "Ouro";
    }
    else if (qtdVitorias <= 90 ){
        nivelHeroi = "Diamante";
    }
    else if (qtdVitorias <= 100 ){
        nivelHeroi = "Lendário";
    }
    else{
        nivelHeroi = "Imortal";
    }

    console.log(`O Herói tem de saldo de ${saldoRankeados} e está no nível de ${nivelHeroi}`);

}

const vitorias = 9;
const derrotas = 5


calculaNivelHeroi(vitorias, derrotas);
