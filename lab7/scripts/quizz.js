const mostrarIcon = document.querySelectorAll('.form-cadastro .material-symbols-outlined');
const primeiroNome = document.getElementById('nome');
const sobrenome = document.getElementById('apelido');
const email = document.getElementById('email');

function verificarQuantidadesLetras(elemento, numeroSpan) {
    const quantidadeLetras = elemento.value.length;
    mostrarIcon[numeroSpan].style.display = 'block';

    if (quantidadeLetras >= 5) {
        mostrarIcon[numeroSpan].textContent = 'check_circle';
        mostrarIcon[numeroSpan].style.color = 'green';
    } else {
        mostrarIcon[numeroSpan].textContent = 'cancel';
        mostrarIcon[numeroSpan].style.color = 'red';
    }
}

primeiroNome.addEventListener('input', () => verificarQuantidadesLetras(primeiroNome, 0));
sobrenome.addEventListener('input', () => verificarQuantidadesLetras(sobrenome, 1));
email.addEventListener('input', () => {
    mostrarIcon[2].style.display = 'block';

    if (email.value.includes('@')) {
        mostrarIcon[2].textContent = 'check_circle';
        mostrarIcon[2].style.color = 'green';
    } else {
        mostrarIcon[2].textContent = 'cancel';
        mostrarIcon[2].style.color = 'red';
    }
});



const p1 = document.getElementById('p1');
const radios = document.querySelectorAll('.pergunta2 input[type="radio"]');
const checkboxs = document.querySelectorAll('.pergunta3 input[type="checkbox"]');
const p4 = document.getElementById('p4');
const mostrarAvisoPergunta4 = document.querySelector('.pergunta4 span');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const mostrarAvisoPergunta6 = document.querySelector('.pergunta6 span');
const p7 = document.getElementById('p7');
const mostrarAvisoPergunta7 = document.querySelector('.pergunta7 span');
const p8 = document.getElementById('p8');
const escalaValorPergunta8 = document.querySelector('.pergunta8 span');
const p9 = document.getElementById('p9');
const p10 = document.getElementById('p10');

const botaoReiniciar = document.querySelector('.reiniciar');
const botaoEnviar = document.querySelector('.enviar');
const caixaCadeado = document.querySelector('.enviar > div');
const cadeado = document.querySelector('.enviar .material-symbols-outlined');

const contadorPlacarRespostas = document.querySelector('#placar span:last-child');
let inputsPreenchidos = Array(10).fill(false);

p1.addEventListener('input', () => {
    if (p1.value.length > 0 && !inputsPreenchidos[0]) {
        inputsPreenchidos[0] = true;
        contadorPlacarRespostas.textContent++;
    } else if (p1.value.length === 0 && inputsPreenchidos[0]) {
        inputsPreenchidos[0] = false;
        contadorPlacarRespostas.textContent--;
    }

    verificarCadeado();
});

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (inputsPreenchidos[1] === false) {
            inputsPreenchidos[1] = true;
            contadorPlacarRespostas.textContent++;
        }
    })

    verificarCadeado();
});

checkboxs.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const algumMarcado = Array.from(checkboxs).some(checkbox => checkbox.checked);

        if (algumMarcado && inputsPreenchidos[2] === false) {
            inputsPreenchidos[2] = true;
            contadorPlacarRespostas.textContent++;
        } else if (!algumMarcado && inputsPreenchidos[2] === true) {
            inputsPreenchidos[2] = false;
            contadorPlacarRespostas.textContent--;
        }
    })

    verificarCadeado();
});

p4.addEventListener('input', () => {
    if (p4.value >= 0 && p4.value <= 1000 && inputsPreenchidos[3] === false) {
        inputsPreenchidos[3] = true;
        mostrarAvisoPergunta4.style.display = 'none';
        contadorPlacarRespostas.textContent++;
    } else if ((p4.value.length === 0 || p4.value > 1000) && inputsPreenchidos[3] === true) {
        inputsPreenchidos[3] = false;
        mostrarAvisoPergunta4.style.display = 'block';
        contadorPlacarRespostas.textContent--;
    }

    verificarCadeado();
});

p5.addEventListener('input', () => {
    if (p5.value !== '' && inputsPreenchidos[4] === false) {
        inputsPreenchidos[4] = true;
        contadorPlacarRespostas.textContent++;
    } else if (p5.value === '' && inputsPreenchidos[4] === true) {
        inputsPreenchidos[4] = false;
        contadorPlacarRespostas.textContent--;
    }

    verificarCadeado();
})

p6.addEventListener('input', () => {
    if (p6.value !== '#ffffff' && inputsPreenchidos[5] === false) {
        inputsPreenchidos[5] = true;
        mostrarAvisoPergunta6.style.display = 'none';
        contadorPlacarRespostas.textContent++;
    } else if (p6.value === '#ffffff' && inputsPreenchidos[5] === true) {
        inputsPreenchidos[5] = false;
        mostrarAvisoPergunta6.style.display = 'block';
        contadorPlacarRespostas.textContent--;
    }

    verificarCadeado();
});

p7.addEventListener('input', () => {
    if (p7.value >= 0 && p7.value <= 3000 && inputsPreenchidos[6] === false) {
        inputsPreenchidos[6] = true;
        mostrarAvisoPergunta7.style.display = 'none';
        contadorPlacarRespostas.textContent++;
    } else if ((p7.value.length === 0 || p7.value > 3000) && inputsPreenchidos[6] === true) {
        inputsPreenchidos[6] = false;
        mostrarAvisoPergunta7.style.display = 'block';
        contadorPlacarRespostas.textContent--;
    }

    verificarCadeado();
});

p8.addEventListener('input', () => {
    escalaValorPergunta8.textContent = p8.value;

    if (escalaValorPergunta8.value !== 0 && inputsPreenchidos[7] === false) {
        inputsPreenchidos[7] = true;
        contadorPlacarRespostas.textContent++;
    }

    verificarCadeado();
});

p9.addEventListener('input', () => {
    if (p9.value !== '' && inputsPreenchidos[8] === false) {
        inputsPreenchidos[8] = true;
        contadorPlacarRespostas.textContent++;
    } else if (p9.value === '' && inputsPreenchidos[8] === true) {
        inputsPreenchidos[8] = false;
        contadorPlacarRespostas.textContent--;
    }

    verificarCadeado();
});

p10.addEventListener('change', () => {
    if (p10.files.length > 0 && inputsPreenchidos[9] === false) {
        inputsPreenchidos[9] = true;
        contadorPlacarRespostas.textContent++;
    } else if (p10.files.length === 0 && inputsPreenchidos[9] === true) {
        inputsPreenchidos[9] = false;
        contadorPlacarRespostas.textContent--;
    }

    verificarCadeado();
});



function verificarCadeado() {
    if (contadorPlacarRespostas.textContent >= 10) {
        cadeado.style.display = 'none';
        caixaCadeado.style.display = 'none';
    } else {
        cadeado.style.display = 'block';
        caixaCadeado.style.display = 'block';
    }

    console.log(contadorPlacarRespostas.value);
}

botaoEnviar.addEventListener('click', (event) => {
    if (contadorPlacarRespostas.textContent < 10) {
        event.preventDefault();
        alert('Responda todas as perguntas antes de enviar!');
    } else {
        alert('Formulário enviado. Obrigado pelo seu tempo :)');
    }
});

botaoReiniciar.addEventListener('click', () => {
    contadorPlacarRespostas.textContent = 0;
});