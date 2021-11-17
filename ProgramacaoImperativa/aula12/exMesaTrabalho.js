let alice = [23, 82, 46];
let bob = [45, 8, 32];

function econtrarVencedor(array1, array2) {
    let comediante1 = 0;
    let comediante2 = 0;
    for (let i = 0; i < array1.length; i++) {
        if(array1[i] > array2[i]) {
            comediante1 ++;
            console.log(comediante1);
        } else if(array1[i] < array2[i]) {
            comediante2 ++;
            console.log(comediante2);
        }
    }
    if (comediante1 > comediante2) {
        return console.log("Comediante 1 é o(a) vencedor(a)!!");
    } else if (comediante1 < comediante2) {
    return console.log("Comediante 2 é o(a) vencedor(a)!!");
    } else {
        return console.log("Ninguém venceu, houve um empate!");
    }
}

econtrarVencedor(alice, bob);