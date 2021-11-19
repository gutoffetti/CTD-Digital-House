/* Um cliente nos pede para fazer um aplicativo que possa determinar os vencedores de um concurso que foi realizado no fim de semana. Para isso, precisaremos seguir as seguintes instruções e informações para poder desenvolver nosso aplicativo.
Cada participante tem 5 notas, dos quais suas pontuações individuais serão formadas, os participantes com suas respectivas pontuações são:
● Participante A: 5, 8, 4, 9, 5;
● Participante B: 8, 7, 8, 6, 8;
● Participante C: 7, 5, 10, 8, 3.
O concurso consiste em 2 modalidades de seleção para um vencedor:
● Melhor média (a maior pontuação média entre os concorrentes);
● Maior e-tip(a maior pontuação entre as 5 notas de cada participante). */

let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

/* Com essas informações, nosso líder de Tecnologia nos pergunta o seguinte:
1. Determine qual seria a maneira ideal de representar cada participante com suas pontuações. */

function showPoints(p1, p2, p3) {
    console.log("|-----------------------------------------------------------------|");
    console.log("|                                                                 |");
    console.log("|-------------------Pontuação dos Participantes-------------------|");
    console.log("|                                                                 |");
    console.log("|-----------------------------------------------------------------|");
    console.log("|                                                                 |");
    console.log("|--- Participantes ----------------- Notas por Rodada ------------|");
    console.log("|                                                                 |");
    console.log("|-------------------------- R1 ---- R2 ---- R3 ---- R4 ---- R5 ---|");
    console.log("|                                                                 |");
    console.log("|--- Participante 1 -------", p1[0], "-----", p1[1], "-----", p1[2], "-----", p1[3], "-----", p1[4], "----|");
    console.log("|                                                                 |");
    console.log("|--- Participante 2 -------", p2[0], "-----", p2[1], "-----", p2[2], "-----", p2[3], "-----", p2[4], "----|");
    console.log("|                                                                 |");
    console.log("|--- Participante 3 -------", p3[0], "-----", p3[1], "-----", p3[2], "----", p3[3], "-----", p3[4], "----|");
    console.log("|                                                                 |");
    console.log("|-----------------------------------------------------------------|");
}

// showPoints(participanteA, participanteB, participanteC);

/* 2. Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele. */

function pontuacaoMedia(p1, p2, p3) {
    // console.log("");
    // console.log("-------------------Pontuação Média---------------------");
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    for (let i = 0; i < p1.length; i++) {
        sum1 += p1[i];
    } let media1 = sum1/p1.length;
    // console.log("");
    // console.log("-------------------Participante 1----------------------");
    // console.log("A pontuação média do primeiro participante é: " + media1);
    for (let i = 0; i < p2.length; i++) {
        sum2 += p2[i];
    } let media2 = sum2/p2.length;
    // console.log("");
    // console.log("-------------------Participante 2----------------------")
    // console.log("A pontuação média do segundo participante é: " + media2);
    for (let i = 0; i < p3.length; i++) {
        sum3 += p3[i];
    } let media3 = sum3/p3.length;
    // console.log("");
    // console.log("-------------------Participante 3----------------------")
    // console.log("A pontuação média do terceiro participante é: " + media3);
    // console.log("");

    let mediaGeral = [media1, media2, media3];
    return mediaGeral;
}

// pontuacaoMedia(participanteA, participanteB, participanteC);

/* 3. Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem. */

function pontuacaoMaior(p1, p2, p3) {
    // console.log("");
    // console.log("-------------------Maior Pontuação---------------------");
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;

    for (let i = 0; i < p1.length; i++) {
        if (nota1 < p1[i]) {
            nota1 = p1[i];
        }
    }
    // console.log("");
    // console.log("-------------------Participante 1----------------------");
    // console.log("A maior pontuação do primeiro participante é: " + nota1);

    for (let i = 0; i < p2.length; i++) {
        if (nota2 < p2[i]) {
            nota2 = p2[i];
        }
    }
    // console.log("");
    // console.log("-------------------Participante 2----------------------");
    // console.log("A maior pontuação do segundo participante é: " + nota2);

    for (let i = 0; i < p3.length; i++) {
        if (nota3 < p3[i]) {
            nota3 = p3[i];
        }
    }
    // console.log("");
    // console.log("-------------------Participante 3----------------------");
    // console.log("A maior pontuação do terceiro participante é: " + nota3);
    // console.log("");

    let notaGeral = [nota1, nota2, nota3];
    return notaGeral;
}

// pontuacaoMaior(participanteA, participanteB, participanteC);


/* 4. Logo nosso líder tecnológico nos pede para criar essas duas funções, geramos uma nova funcionalidade chamada competição que receberá os 3 participantes por parâmetros, executará as duas funções criadas anteriormente para calcular as médias e pontuações mais altas de cada uma e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação. */

function appVencedores(p1, p2, p3) {
    showPoints(p1, p2, p3);
    console.log("|                                                                 |");
    console.log("|-------------------- Vencedores do Concurso! --------------------|");
    console.log("|                                                                 |");
    console.log("|-----------------------------------------------------------------|");
    console.log("|                                                                 |");
    console.log("|---------------------- Primeiro Critério: -----------------------|");
    console.log("|                                                                 |");
    console.log("|                           Maior Média                           |");
    console.log("|                                                                 |");
    console.log("|-----------------------------------------------------------------|");
    console.log("|                            Vencedor:                            |");
    console.log("|-----------------------------------------------------------------|");
    console.log("|                                                                 |");
    if (pontuacaoMedia(p1, p2, p3)[0] > pontuacaoMedia(p1, p2, p3)[1] && pontuacaoMedia(p1, p2, p3)[0] > pontuacaoMedia(p1, p2, p3)[2]) {
        console.log("|--- Participante 1 ------------------ Nota Média: ", pontuacaoMedia(p1, p2, p3)[0],  "----------|");
    } else if (pontuacaoMedia(p1, p2, p3)[1] > pontuacaoMedia(p1, p2, p3)[0] && pontuacaoMedia(p1, p2, p3)[1] > pontuacaoMedia(p1, p2, p3)[2]) {
        console.log("|--- Participante 2 ------------------ Nota Média: ", pontuacaoMedia(p1, p2, p3)[1],  "----------|");
    } else if (pontuacaoMedia(p1, p2, p3)[2] > pontuacaoMedia(p1, p2, p3)[0] && pontuacaoMedia(p1, p2, p3)[2] > pontuacaoMedia(p1, p2, p3)[1]) {
        console.log("|--- Participante 3 ------------------ Nota Média: ", pontuacaoMedia(p1, p2, p3)[2],  "----------|");
    }
    console.log("|                                                                 |");
    console.log("|-----------------------------------------------------------------|");
    console.log("|                                                                 |");
    console.log("|----------------------- Segundo Critério: -----------------------|");
    console.log("|                                                                 |");
    console.log("|                           Maior Nota                            |");
    console.log("|                                                                 |");
    console.log("|-----------------------------------------------------------------|");
    console.log("|                            Vencedor:                            |");
    console.log("|-----------------------------------------------------------------|");
    console.log("|                                                                 |");
    
    if (pontuacaoMaior(p1, p2, p3)[0] > pontuacaoMaior(p1, p2, p3)[1] && pontuacaoMaior(p1, p2, p3)[0] > pontuacaoMaior(p1, p2, p3)[2]) {
        console.log("|--- Participante 1 ------------------ Nota: ", pontuacaoMaior(p1, p2, p3)[0],  "----------------|");
    } else if (pontuacaoMaior(p1, p2, p3)[1] > pontuacaoMaior(p1, p2, p3)[0] && pontuacaoMaior(p1, p2, p3)[1] > pontuacaoMaior(p1, p2, p3)[2]) {
        console.log("|--- Participante 2 ------------------ Nota: ", pontuacaoMaior(p1, p2, p3)[1],  "----------------|");
    } else if (pontuacaoMaior(p1, p2, p3)[2] > pontuacaoMaior(p1, p2, p3)[0] && pontuacaoMaior(p1, p2, p3)[2] > pontuacaoMaior(p1, p2, p3)[1]) {
        console.log("|--- Participante 3 ------------------ Nota: ", pontuacaoMaior(p1, p2, p3)[2],  "-----------------|");
    }
    console.log("|                                                                 |");
    console.log("|_________________________________________________________________|");
}

appVencedores(participanteA, participanteB, participanteC);