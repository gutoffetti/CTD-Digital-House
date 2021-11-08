// Micro Desafio - mesa de Trabalho
// Parte 1
/* function podeSubir(altura, acompanhante) {
    if (altura >= 1.40 && altura <= 2.0) {
        return true;
    }else if (altura >= 1.20 && altura < 2.0) {
        return true
    }else {
        return false
    }
}
console.log(podeSubir(1.10, "sim")); */

// Parte 2
function podeSubir(altura, acompanhante) {
    if (altura >= 1.40 && altura <= 2.0) {
        return "Acesso autorizado!";
    }else if (altura >= 1.20 && altura < 2.0 && acompanhante) {
        return "Acesso autorizado somente com acompanhante.";
    }else {
        return "Acesso negado."
    }
}

console.log(podeSubir(1.30, true));