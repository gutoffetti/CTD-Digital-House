let numeros = [1,2,3,4];

let dobro = numeros.map(function(item){
    // console.log(item);
    return item * 2;
});

console.log(dobro);

console.log("-------------------------------------------");
let idades = [22, 25, 14, 19, 15];

let maiores = idades.filter(function(item) {
    console.log(item >= 18);
    return item >= 18;
});

console.log(maiores);

console.log("-------------------------------------------");
let soma = numeros.reduce(function(acumulador, item) {
    // console.log(acumulador, item);
    return acumulador+ item;
});

console.log("-------------------------------------------");
