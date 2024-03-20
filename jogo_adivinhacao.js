// jogo_adivinhacao.js

const numeroAleatorio = gerarNumeroAleatorio(1, 100);
const guessInput = document.createElement("input");
guessInput.setAttribute("type", "number");
guessInput.setAttribute("placeholder", "(entre 1 e 100)");
const checkBtn = document.createElement("button");
checkBtn.textContent = "Verificar";
const message = document.createElement("p");
const tentativasElement = document.createElement("p");
let tentativas = 0;

function gerarNumeroAleatorio(min, max) {
  let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  // Função interna para gerar um novo número aleatório
  function gerarNovoNumero() {
    numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return {
    getNumero: () => numeroAleatorio,
    gerarNovoNumero,
  };
}

const numeroAleatorioGerado = gerarNumeroAleatorio(1, 100);

function verificarPalpite() {
  const guess = parseInt(guessInput.value);
  tentativas++;

  if (numeroAleatorioGerado.getNumero() === guess) {
    message.textContent = `Parabéns! Você acertou o número em ${tentativas} tentativas.`;
    message.style.color = "green";
    guessInput.disabled = true;
    checkBtn.disabled = true;

    // Função lambda para calcular a pontuação
    const pontuacao = () => Math.floor(100 - (tentativas / 10));

    // Exibir a pontuação
    const scoreElement = document.createElement("p");
    scoreElement.textContent = `Sua pontuação foi: ${pontuacao()}`;
    document.getElementById("jogoContainer").appendChild(scoreElement);
  } else {
    message.textContent = `Tente um número ${
      guess < numeroAleatorioGerado.getNumero() ? "maior" : "menor"
    }.`;
    message.style.color = "red";
  }

  tentativasElement.textContent = "Tentativas: " + tentativas;
}

checkBtn.addEventListener("click", verificarPalpite);
tentativasElement.textContent = "Tentativas: 0";

document.getElementById("jogoContainer").appendChild(guessInput);
document.getElementById("jogoContainer").appendChild(checkBtn);
document.getElementById("jogoContainer").appendChild(message);
document.getElementById("jogoContainer").appendChild(tentativasElement);
