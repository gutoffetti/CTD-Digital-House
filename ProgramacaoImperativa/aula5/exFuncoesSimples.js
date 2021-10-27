// 1. Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function polegadas(a) {
    return 2.54 * a;
}
console.log(polegadas(10));

// 2. Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
function string(text) {
    return "https://www."+text+".com.br";
}
console.log(string("gustavo"));

// 3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function exclamacao(text) {
    return text+"!";
}
console.log(exclamacao("Sou demais"));

// 4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function dogAge(a, b) {
    return console.log("O cachorro possui "+a+" anos humanos e "+ a*b + " anos na idade dos cachorros");
}
dogAge(10, 7);

// 5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal. PS: considere que você trabalhe 160 horas no mês.
function salarioHora(a) {
    return console.log("Com base no seu salário mensal, você recebe R$"+ a/160 + " por hora.");
}
salarioHora(1200);

// 6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.
function imc(altura, peso) {
    return console.log("O seu índice de massa corpórea é de: "+ peso / (altura * altura));
}
imc(1.86, 88);

// 7. Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. Investigue o que o método de .toUpperCase() faz.
function maiúsculas(text) {
    return text.toUpperCase();
}
console.log(maiúsculas("gustavo"));

// 8. Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro. Dica: Isso te ajudará a entender o que o operador typeof faz.
function tipo(a) {
    return typeof(a);
}
console.log(tipo(2));

// 9. Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência. Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
function circunferência(raio) {
    return 2 * Math.PI * raio;
}
console.log(circunferência(10));