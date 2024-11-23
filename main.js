// Criando variáveis
// Criando uma variável que recebe a informação do documento HTML
const botao = document.getElementById("botao");
let lampada = document.getElementById("lampada");
let statusTexto = document.getElementById("status");

// Criando uma função (bloco de código com função específica)

function alternarLampada() {
    if (botao.textContent == "Ligar") {
        lampada.src = "imagens/ligado.png";
        botao.textContent = "Desligar";
        statusTexto.textContent = "Acesso";
        statusTexto.style.color = "Green";
        statusTexto.style.fontSize = "30px";
    } else {
        lampada.src = "imagens/apagado.png";
        botao.textContent = "Ligar";
        statusTexto.textContent = "Apagado";
        statusTexto.style.color = "Red";
        statusTexto.style.fontsize = "30px";
    }
}

alternarLampada();