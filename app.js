let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

    function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

    function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
        let quantidadeDeElementosNaLista = listaNumerosSorteados.length

        if (quantidadeDeElementosNaLista == numeroLimite) {
            listaNumerosSorteados = [];
        }


    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}
    function exibirMensagemInical() {
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
    exibirMensagemInical();

    function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é maior ');
        }
        tentativas++;
    }
}

    function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

    function reniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInical();
    
}
