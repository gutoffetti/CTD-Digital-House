function soma(num1, num2) {
    return (num1+num2);
}

function subtracao(num1, num2) {
    return (num1-num2);
}

function multiplicacao(num1, num2) {
    return (num1*num2);
}

function divisao(num1,num2) {
    return (num1/num2);
}

function quadradoDoNumero(num1) {
    return multiplicacao(num1, num1);
}

function mediaDeTresNumeros(num1, num2, num3){
    let total = soma(soma(num1, num2), num3);
    return divisao(total, 3);
}

function calcularPorcentagem(num1, num2) {
    let total = multiplicacao(num1, num2);
    return divisao(total, 100);
}

function geradorDePorcentagem(num1, num2) {
    let total = multiplicacao(100, num1);
    return divisao(total, num2);
}

console.log ("-------------- Teste de Operações / Calculadora --------------");

console.log("O resultado da soma é: "+soma(10,9));

console.log("O resultado da subtração é: "+subtracao(10,9));

console.log("O resultado da multiplicação é: "+multiplicacao(10,9));

console.log("O resultado da divisão é: "+divisao(10,9));

console.log("O resultado do quadrado do número é: "+quadradoDoNumero(2));

console.log("O resultado da média é: "+mediaDeTresNumeros(2, 4, 6));

console.log("O resultado do cálculo da porcentagem é: "+calcularPorcentagem(100, 10));

console.log("O resultado da porcentagem do número é de: "+geradorDePorcentagem(2, 200)+"%");