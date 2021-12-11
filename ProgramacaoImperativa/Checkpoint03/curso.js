let estudantes = require('./estudantes');
let Aluno = require('./aluno');
const { Gustavo } = require('./estudantes');

let curso = {
    nomeCurso: "Programação Imperativa",
    notaAprov: 7,
    faltasMax: 5,
    estudantes: estudantes,
    addAluno: function(nome, qtdFaltas, notas) {
        let novoAluno = new Aluno(nome, qtdFaltas, notas);
        this.estudantes = novoAluno;
    },
    aprovado: function(nome) {
        let aluno = this.estudantes[nome]
        if (aluno.calcularMedia() >= this.notaAprov && aluno.qtdFaltas < this.faltasMax) {
            return true;
        } else if (aluno.qtdFaltas === this.faltasMax && aluno.calcularMedia() >= this.notaAprov+(this.notaAprov*0.1)) {
            return true;
        } else {
            return false;
        }
    },
    salaAprovada: function() {
        let turmaAprovada = [];
        let turma = Object.keys(this.estudantes);
        for (let i = 0; i < turma.length; i++) {
            let nome = turma[i];
            turmaAprovada.push(curso.aprovado(nome));
        }   return console.log(turmaAprovada);
    }
};

curso.addAluno("Marcos", 0, [10, 10, 10, 10]);
console.log(curso);
// console.log(curso.estudantes["Gustavo"]);
// console.log(curso.aprovado("Jonas"));
// console.log(Object.values(curso.estudantes));
// console.log(curso.salaAprovada());


// let estudantesArray = Object.keys(estudantes);
// console.log(estudantesArray);
