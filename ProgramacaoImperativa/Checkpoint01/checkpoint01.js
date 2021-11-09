// Checkpoint 01 - Menu Microondas Super Veloz

function menuMicroondas(opcaoMenu, tempo) {
    // Tempo padrão dos alimentos
    let pipoca = 10;
    let macarrao = 8;
    let carne = 15;
    let feijao = 12;
    let brigaeiro = 8;

    console.log("---------------------------------------------------------");
    console.log("------------------Microondas Super Veloz-----------------");
    console.log("---------------------------------------------------------");
    console.log("---------------Microondas em Funcionamento---------------");
    console.log("---------------------------------------------------------");
    console.log("----------------- Menssagem do Sistema: -----------------");
    console.log("");

    if (opcaoMenu < 1 || opcaoMenu > 5) {
        console.log("");
        console.log("---------------------------------------------------------");
        console.log("-Prato inexistente!  Favor verificar o número informado.-");
        console.log("---------------------------------------------------------");
    }
    
    /* if (typeof opcaoMenu !== Number || typeof tempo !== Number) {
        console.log("Favor digitar um número válido.");
    } */

switch (opcaoMenu) {
    case 1:
        if (tempo < pipoca) {
            console.log("Tempo insuficiente!");
        } else if (tempo >= (2*pipoca) && tempo < (3*pipoca)) {
            console.log("Vacilou no tempo, sua comida queimou!");
        } else if (tempo >= pipoca && tempo < 2*pipoca){
            console.log("Prato pronto, bom apetite!!!");
        } else {
            console.log("KABUM!!!!!!!");
        }
        break;
    case 2:
        if (tempo < macarrao) {
            console.log("Tempo insuficiente!");
        } else if (tempo >= (2*macarrao) && tempo < (3*macarrao)) {
            console.log("Vacilou no tempo, sua comida queimou!");
        } else if (tempo >= macarrao && tempo < (2*macarrao)){
            console.log("Prato pronto, bom apetite!!!");
        } else {
            console.log("KABUM!!!!!!!")
        }
        break;
    case 3:
        if (tempo < carne) {
            console.log("Tempo insuficiente!")
        } else if (tempo >= (2*carne) && tempo < (3*carne)) {
            console.log("Vacilou no tempo, sua comida queimou!")
        } else if (tempo >= carne && tempo < (2*carne)){
            console.log("Prato pronto, bom apetite!!!")
        } else {
            console.log("KABUM!!!!!!!")
        }
        break;
    case 4:
        if (tempo < feijao) {
            console.log("Tempo insuficiente!")
        } else if (tempo >= (2*feijao) && tempo < (3*feijao)) {
            console.log("Vacilou no tempo, sua comida queimou!")
        } else if (tempo >= feijao && tempo < (2*feijao)){
            console.log("Prato pronto, bom apetite!!!")
        } else {
            console.log("KABUM!!!!!!!")
        }
        break;
    case 5:
        if (tempo < brigaeiro) {
            console.log("Tempo insuficiente!")
        } else if (tempo >= (2*brigaeiro) && tempo < (3*brigaeiro)) {
            console.log("Vacilou no tempo, sua comida queimou!")
        } else if (tempo >= brigaeiro && tempo < (2*brigaeiro)){
            console.log("Prato pronto, bom apetite!!!")
        } else {
            console.log("KABUM!!!!!!!")
        }
        break;  
    }
    console.log("")
    console.log("---------------------------------------------------------")
    console.log("--------------- Obrigado por Utilizar o -----------------")
    console.log("--------------- Microondas Super Veloz! -----------------")
    console.log("---------------------------------------------------------")
}

menuMicroondas(1, 10);