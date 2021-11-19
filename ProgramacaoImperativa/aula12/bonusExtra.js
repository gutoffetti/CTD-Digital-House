/* 1 - Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
● Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido, você deve exibir a string &quot;Digital&quot; em vez do número.
● Se o número a ser impresso for um múltiplo do segundo parâmetro inserido, você deve exibir a string &quot;House&quot; em vez disso.
● Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você deve exibir a string &quot;Digital House&quot; em vez do número. */

function digitalHouse(num1, num2) {
    for (let i = 1; i < 101; i++) {
        if (num1 % i == 0) {
            console.log("Digital");
        } else if (num2 % i == 0) {
            console.log("House");
        } else {
            console.log(i);
        }
    }
}

digitalHouse(9, 21);
console.log("-------------------------------------------------------")

/* 2 - somaArray()... Reloaded
Vamos pegar o exercício sumArray() que fizemos na classe arrays, mas desta vez
vamos modificá-lo para que ele possa receber um array de números de qualquer
quantidade de elementos.
Se você não se lembrar da instrução original:
Você deve criar uma função somaArray que aceita uma matriz de números e retorna
a soma de todos eles.

exemplo:
● somaArray([1,2,3]) // 6
● somaArray([10, 3, 10, 4]) // 27
● somaArray([-5,100]) // 95
*/
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
console.log("-------------------------------------------------------")
/* 3 - você deve modificar a função join() para que ela possa receber uma matriz de strings
de qualquer quantidade de elementos.
Importante: Você não pode usar o método original Array.join().
*/
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
console.log("-------------------------------------------------------")