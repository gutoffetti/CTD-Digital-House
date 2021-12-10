let Aluno = require('./aluno');



let Gustavo = new Aluno("Gustavo", 0, [10, 8, 9, 10]);
let Antonio = new Aluno("Antonio", 1, [9, 7, 9, 9]);
let Douglas = new Aluno("Douglas", 2, [8, 6, 8, 7]);
let Jonas = new Aluno("Jonas", 3, [10, 8, 7, 9]);
let Marcel = new Aluno("Marcel", 4, [9, 6, 7, 8]);
let Tayan = new Aluno("Tayan", 5, [7, 6, 4, 5]);

let estudantes = {
    Gustavo,
    Antonio,
    Douglas,
    Jonas,
    Marcel,
    Tayan
};

// console.log(estudantes);
// console.log(Gustavo.calcularMedia());

module.exports = estudantes;