// 1

const exercicio1 = document.querySelector('#ex1 > p');

function trocarFraseNova() {
    exercicio1.innerHTML = '1.Obrigado por passares!';
}
function trocarFraseAntiga() {
    exercicio1.innerHTML = '1.Passa por aqui!';
}

exercicio1.onmouseover = trocarFraseNova;
exercicio1.onmouseout = trocarFraseAntiga;


// 2

const exercicio2 = document.querySelector('#ex2 > p');
const botoes = document.querySelectorAll('#ex2 > button');


function trocaCor(event) {
    const corParaTroca = event.target.textContent.toLowerCase();
    exercicio2.style.color = corParaTroca;
}

botoes.forEach(botao => botao.onclick = trocaCor);


// 3

const exercicio3 = document.querySelector('#ex3 > input[type="text"]');

function gerarCorRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function mudaCorFundo() {
    exercicio3.style.backgroundColor = gerarCorRgb();
}

exercicio3.onkeydown = mudaCorFundo;


// 4 

const exercicio4 = document.querySelector('#ex4 > input[type="text"]');
const botao = document.querySelector('#ex4 > button');

function mudarCorBody() {
    document.body.style.backgroundColor = exercicio4.value;
}

botao.onclick = mudarCorBody;


// 5

const exercicio5 = document.querySelector('#ex5 > button');
const count = document.querySelector('#ex5 > span:nth-of-type(2)');
let contador = 0;

function incrementarCount() {
    contador++;
    count.innerHTML = contador;
}

exercicio5.onclick = incrementarCount;
