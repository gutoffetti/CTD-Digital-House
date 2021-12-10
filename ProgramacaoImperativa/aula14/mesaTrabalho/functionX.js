function escolhaAMsg(n1) {
    if (n1 == 1) {
        console.log('');
        console.log('Esolheu bem! A frase ecolhida foi a número: ', n1);
        console.log('---------------------------------')
        console.log('Mensagem: Se a vida te da um limão, faça uma limonada!');
        console.log('---------------------------------')
    } else if (n1 == 2) {
        console.log('');
        console.log('Ótima escolha! A frase ecolhida foi a número: ', n1);
        console.log('---------------------------------')
        console.log('Mensagem: Eu só sei, que nada sei!');
        console.log('---------------------------------')
    } else if (n1 == 3) {
        console.log('');
        console.log('Arrasou na escolha! A frase ecolhida foi a número: ', n1);
        console.log('---------------------------------')
        console.log('Mensagem: Antes tarde do que nunca!');
        console.log('---------------------------------');
    } return 'Fim da mensagem!';
}

module.exports = escolhaAMsg;