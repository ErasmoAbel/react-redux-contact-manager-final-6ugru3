const ultimaPergunta = 5;
let quantidadeAcertos = 0;
let perguntaActual = 1;

function verificarResposta(event) {
    const tagDoElemento = event.target.tagName;
        if (tagDoElemento !== 'BUTTON') {
            return
        }
    const classeBotao = event.target.ClassName;
    const classeOpcaoCerta = "opcao-certa";
    
    if (classeBotao === classeOpcaoCerta) {
        quantidadeAcertos++;
    }
    const divPerguntaActual = document.querySelector('.pergunta-'+ perguntaActual);
    divPerguntaActual.classList.add('escondido');
    perguntaActual++;

    if (perguntaActual > ultimaPergunta) {
        const divResultado = document.querySelector(".resultado");
        divResultado.classList.remove("escondido");

        const textoAcertos = document.querySelector('.acertos');
        textoAcertos.innerText = quantidadeAcertos;
        return;
    }
       const divProximaPergunta = document.querySelector('.pergunta-'+ perguntaActual);
        divProximaPergunta.classList.remove('escondido');

        const textoPerguntaActual = document.querySelector(".pergunta-actual");
        textoPerguntaActual.innerText = perguntaActual;
}

function voltarparafuturo() {
    perguntaActual = 1;
    quantidadeAcertos = 0;

    const textoAcertos = document.querySelector('.acertos');
        textoAcertos.innerText = quantidadeAcertos;
        return;

    const divResultado = document.querySelector(".resultado");
    divResultado.classList.add("escondido");

        textoAcertos.innerText = quantidadeAcertos;
        return;
       const divProximaPergunta = document.querySelector('.pergunta-'+ perguntaActual);
}