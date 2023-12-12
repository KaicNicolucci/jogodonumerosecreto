let numeroMaximo = 10;
let numeroSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let chute;
let tentativas = 1;
let palavraTentativa;

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeNumerosSorteados = numeroSorteados.length
    if (quantidadeDeNumerosSorteados == numeroMaximo){
        numeroSorteados = []
    };
    if (numeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    };
};

function exbirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // resposiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exbirTextoNaTela('h1', 'Jogo do Número Secreto');
    exbirTextoNaTela('p', `Escolha um número de 1 a ${numeroMaximo}.`);
}
mensagemInicial();

function verificarChute(){
    chute = document.querySelector('input').value;
    if (chute==numeroSecreto) {
        palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exbirTextoNaTela('h1', 'Parabéns!');
        exbirTextoNaTela('p', `Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute>numeroSecreto) {
            exbirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        } else {
            exbirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        chute = document.querySelector('input');
        chute.value = '';
    }
}

function reiniciarJogo() {
    mensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    chute = document.querySelector('input');
    chute.value = '';
    document.getElementById('reiniciar').setAttribute('disabled', true);
};