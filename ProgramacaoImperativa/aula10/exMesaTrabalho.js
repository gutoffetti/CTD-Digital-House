// pop e unshift

// 1 - Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
let lista = ["abobrinha", "sapato", "Luísa", "Nina", "Gustavo"];

function imprimirInverso(array) {
    let variavelFor = array.length;
    for (let i = 0; i < variavelFor; i++) {
        console.log(array.pop());
    }
}

imprimirInverso(lista);
console.log(lista);


// 2 - Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
let lista2 = ["abobrinha", "sapato", "Luísa", "Nina", "Gustavo"];

function inverter(array) {
    let variavelFor = array.length; // se eu coloco o "array.length" direto na comparação com "i", ele só conta até 3.
    let listaIvertida = [];
    for (let i = 0; i < variavelFor; i++) {
        let element = array.pop()
        listaIvertida.push(element);
        
    }   return console.log(listaIvertida);
}

inverter(lista2);

// 3 - Crie uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
let lista3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somarArray(array) {
    let somaArray = 0;
    let variavelFor = array.length; // se eu coloco o "array.length" direto na comparação com "i", ele só conta até 3.
    for (let i = 0; i < variavelFor; i++) {
        const element = array.pop();
        somaArray = somaArray + element;
    } return console.log(somaArray);
}

somarArray(lista3);

// 4 - Crie uma função chamada join que recebe um array e simula o comportamento do método Array.join().
let lista4 = ["O", "l", "á", ",", " ", "a", "m", "i", "g", "o", "s", "!"];

function join(array) {
    let joinArray = "";
    let variavelFor = array.length;
    for (let i = 0; i < variavelFor; i++) {
        const element = array.shift();
        joinArray = joinArray + element;
    }   return console.log(joinArray);
}

join(lista4);

// let teste = "oi";
// teste = teste + "!";
// console.log(teste);

console.log("-------------------------------------------------------")
console.log("--------------Nova sequência de exercícios-------------")
console.log("-------------------------------------------------------")

// 1 - Criar a estrutura apropriada para armazenar os seguintes filmes e séries: "star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];


// 2 - Crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.

function converterMaiusculas(lista){    
    for (let i = 0; i < filmes.length; i++) {
        const element = filmes[i].toUpperCase();
        filmes[i] = element
    }   return console.log(lista)
}

converterMaiusculas(filmes);
console.log("-------------------------------------------------------")

/* 3 - Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
	"Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos. */
/* 4 - Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável. */
console.log("----------------Exercícios 3 e 4 abaixo----------------")
let filmesAnimados = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function passagemDeElemento(array1, array2) {
    let invalido = array2.pop()
    for (let i = 0; i < array2.length; i++) {
        const element = array2[i];
        array1.push(element.toUpperCase());
    }   return console.log(array1);
}

passagemDeElemento(filmes, filmesAnimados);
console.log("-------------------------------------------------------")

/* 5 - Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes. */
let asia = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let europa = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararClassificacoes(array1, array2) {
    let comparacoesAsiaEuropa = [];
    for (let i = 0; i < array1.length; i++) {
        comparacoesAsiaEuropa[i] = array1[i] === array2[i];
        
    } return console.log(comparacoesAsiaEuropa);
}

compararClassificacoes(asia, europa);
console.log("-------------------------------------------------------")