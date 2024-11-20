// 1

const exercicio1 = document.querySelector('#ex1 > p');

exercicio1.onmouseover = () => {exercicio1.textContent = '1.Obrigado por passares!';};
exercicio1.onmouseout = () => {exercicio1.textContent = '1.Passa por aqui!';};


// 2

const exercicio2 = document.querySelector('#ex2 > p');
const botoes = document.querySelectorAll('#ex2 > button');


function trocaCor(event) {
    const corParaTroca = event.target.textContent.toLowerCase();
    exercicio2.style.color = corParaTroca;
}

botoes.forEach((botao) => botao.onclick = () => {
    exercicio2.style.color = botao.dataset.color;
});


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


// 4 .1

const exercicio4o1 = document.querySelector('#ex4o1 > input[type="text"]');
const botao4o1 = document.querySelector('#ex4o1 > button');

function mudarCorBody() {
    document.body.style.backgroundColor = exercicio4o1.value;
}

botao4o1.onclick = mudarCorBody;


// 4 .2

const corAtual = document.querySelector('#ex4o2 > select');

function mudarCorBody4o2(element) {
    document.body.style.backgroundColor = element.value;
}

corAtual.addEventListener('change', function() {
    mudarCorBody4o2(this);
});



// 5

const exercicio5 = document.querySelector('#ex5 > button');
const count = document.querySelector('#ex5 > span:nth-of-type(2)');
let contador = 0;

function incrementarCount() {
    contador++;
    count.innerHTML = contador;
}

exercicio5.onclick = incrementarCount;


// 6

const nome = document.querySelector('#ex6 input[type="text"]');
const idade = document.querySelector('#ex6 input[type="number"]');
const botaoAtualizaNome = document.querySelector('#ex6 button');
const mostraTexto = document.getElementById('mostra-texto');

document.querySelector('form').onsubmit = (element) => {
    element.preventDefault();
}

botaoAtualizaNome.addEventListener('click', () => {
    if (nome.value !== '' && idade.value !== '' && idade.value > 0) {
        mostraTexto.textContent = `Olá, o/a ${nome.value} tem ${idade.value}!`;
    }
});


// 7

const countSpan = document.querySelector('#ex7 span');

if(!localStorage.getItem('count7')) {
    localStorage.setItem('count7', 0);
}

function incrementarCount7() {
    let count7 = localStorage.getItem('count7');
    count7++;
    countSpan.textContent = count7;
    localStorage.setItem('count7', count7);
}

setInterval(() => {
    incrementarCount7();
}, 1000);

countSpan.textContent = localStorage.getItem('count7');