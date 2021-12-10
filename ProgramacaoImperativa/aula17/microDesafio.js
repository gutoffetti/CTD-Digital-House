let pares = [2, 4, 6, 8];

let impar = pares.map((numeros)=>{
    return numeros-1;
})
console.log(impar);

let nomes = ["Maria", "Luísa", "Gustavo", "Maria"];

let filtro = nomes.filter((nome)=> {
    //console.log(nome)
    //return nome === "Maria";
    let idx = nomes.map((nome)=>{
        nome = "Maria";
        return console.log(nomes.indexOf(nome));
    })
    return idx;
})
console.log(filtro);

//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
//Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let numeros = [12,21,185,13,58,51,35]

let numerosNovos = numeros.reduce((acumulador,num)=>{
    return acumulador += '-'+num
})

console.log(numerosNovos)

//2.1 Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().

let numeros2 = [1,2,3,4,5,6,7]



let matrizSoma = numeros2.map((num)=>{
    return num/ numeros.reduce((acumulador,numAtual) =>{
        return acumulador+numAtual
    })
})

console.log(matrizSoma)