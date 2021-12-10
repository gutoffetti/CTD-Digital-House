let estudantes = require('./estudantes');
let Aluno = require('./aluno');

let curso = {
    nomeCurso: "Programação Imperativa",
    notaAprov: 7,
    faltasMax: 5,
    estudantes: estudantes,
    addAluno: function(nome, qtdFaltas, notas) {
        let novoAluno = new Aluno(nome, qtdFaltas, notas);
        this.estudantes.push(novoAluno);
    }
};

curso.addAluno("Marcos", 0, [10, 10, 10, 10]);
console.log(curso);