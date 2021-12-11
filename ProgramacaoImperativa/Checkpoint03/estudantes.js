let Aluno = require('./aluno');



let Gustavo = new Aluno("Gustavo", 0, [10, 8, 9, 10]);
let Antonio = new Aluno("Antonio", 6, [9, 7, 9, 9]);
let Douglas = new Aluno("Douglas", 2, [8, 6, 8, 7]);
let Jonas = new Aluno("Jonas", 3, [5, 6, 3, 2]);
let Marcel = new Aluno("Marcel", 4, [9, 6, 7, 8]);
let Taynan = new Aluno("Taynan", 5, [7, 6, 9, 9]);

let estudantes = {
    Gustavo,
    Antonio,
    Douglas,
    Jonas,
    Marcel,
    Taynan
};

// console.log(estudantes);
// console.log(Gustavo.calcularMedia());

module.exports = estudantes;