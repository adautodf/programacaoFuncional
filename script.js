document.addEventListener('DOMContentLoaded', function () {
  const adivinhacaoBtn = document.getElementById('adivinhacaoBtn');
  const memoriaBtn = document.getElementById('memoriaBtn');
  const jogoExtraBtn = document.getElementById('jogoExtraBtn');
  const jogoContainer = document.getElementById('jogoContainer');

  function limparContainer() {
    jogoContainer.innerHTML = '';
  }

  adivinhacaoBtn.addEventListener('click', function () {
    limparContainer();
    const scriptAdivinhacao = document.createElement('script');
    scriptAdivinhacao.src = 'jogo_adivinhacao.js';
    jogoContainer.appendChild(scriptAdivinhacao);
    jogoContainer.style.opacity = 1;
  });

  memoriaBtn.addEventListener('click', function () {
    limparContainer();
    const scriptMemoria = document.createElement('script');
    scriptMemoria.src = 'jogo_memoria.js';
    jogoContainer.appendChild(scriptMemoria);
    jogoContainer.style.opacity = 1;
  });

  jogoExtraBtn.addEventListener('click', function () {
    limparContainer();
    const mensagem = document.createElement('p');
    mensagem.textContent = 'Jogo Extra - Em construção';
    jogoContainer.appendChild(mensagem);
    jogoContainer.style.opacity = 1;
  });
});