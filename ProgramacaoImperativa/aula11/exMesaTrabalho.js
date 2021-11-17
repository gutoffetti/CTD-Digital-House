let filmes = ["star wars", "mib", "harry potter", "scooby-doo", "trilpo x"];
let filmesAnimados = ["Como Treinar o seu Dragão", "Justice League: War", "Os Incríveis", "fortnite"]

// Exercício 1 - Converter itens da lista para maiúsculo
function converterMaiusculas(lista){    
    for (let i = 0; i < filmes.length; i++) {
        const element = filmes[i].toUpperCase();
        filmes[i] = element
    }   return console.log(lista)
}

converterMaiusculas(filmes);

// Exercício 2 - Adicionar itens de uma lista na outra / Exercício 3 - Filme infiltrado no array de animações
function passagemDeElemento(array1, array2) {
    let invalido = array2.pop()
    for (let i = 0; i < array2.length; i++) {
        const element = array2[i];
        array1.push(element.toUpperCase());
    }   return console.log(array1);
}

passagemDeElemento(filmes, filmesAnimados);

// Exercício 4 - Comparar arrays
let asia = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let europa = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararClassificacoes(array1, array2) {
    let comparacoesAsiaEuropa = [];
    for (let i = 0; i < array1.length; i++) {
        comparacoesAsiaEuropa[i] = array1[i] === array2[i];
        
    } return console.log(comparacoesAsiaEuropa);
}

compararClassificacoes(asia, europa);