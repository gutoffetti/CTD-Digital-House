// let aluno = {
//     nome: "Gustavo",
//     qtdFaltas: 0,
//     notas: [9, 8, 9, 10, 7],
//     calcularMedia: function() {
//         let nota = 0;
//         for (let i = 0; i < this.notas.length; i++) {
//             nota += this.notas[i];
//         }
//         return nota = nota / this.notas.length;
//     },
//     faltas: function() {
//         return this.qtdFaltas++;
//     }
// };

function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    this.calcularMedia= function() {
        let nota = 0;
        for (let i = 0; i < this.notas.length; i++) {
            nota += this.notas[i];
        }
        return nota = nota / this.notas.length;
    };
    this.faltas= function() {
        return this.qtdFaltas++;
    }
};

module.exports = Aluno;



// aluno.faltas();
// console.log(new Aluno("Zé", 1, [10, 8, 9, 10]));
// console.log(aluno);
// console.log(aluno.calcularMedia());
