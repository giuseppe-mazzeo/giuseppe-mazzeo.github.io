const botoes = document.querySelectorAll("button");
const imagens = document.querySelectorAll(".campo-empresa img");

 
imagens.forEach(img => img.classList.add("oculta"));

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        imagens[index].classList.toggle("oculta");
    });
});