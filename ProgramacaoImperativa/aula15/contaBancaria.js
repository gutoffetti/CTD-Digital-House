let data = require('./data');

console.log(data);

function DadosBancarios(numC, tipoC, saldoC, titularC) {
    this.numero = numC;
    this.tipo = tipoC;
    this.saldo = saldoC;
    this.titular = titularC;

}

console.log(DadosBancarios(1012, "Conta Corrente", ));