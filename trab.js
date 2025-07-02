const botao = document.getElementById('mensagem');
const mensagemDiv = document.getElementById('exibirmensagem');

botao.addEventListener('click', () => {
    mensagemDiv.textContent = "Você terá um dia incrivel ✨";
});