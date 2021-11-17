let filmes = ["star wars", "mib", "harry potter", "scooby-doo", "trilpo x"];

// function converterMaiusculas (lista) {
//     for(let i = 0; i <= lista.length; i++) {
//         const element = lista[i].toUpperCase();
//         lista[i] = element
//     }
//     return lista
// }

// console.log(converterMaiusculas(filmes));


function converterMaiusculas(lista){    for (let i = 0; i < filmes.length; i++) {
        const element = filmes[i].toUpperCase();
        filmes[i] = element
        console.log(element)
        console.log(filmes)
    }