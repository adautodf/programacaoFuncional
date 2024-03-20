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

function verificarPalpite(palpite) {
  const numeroAleatorio = 50;
  let mensagem;

  if (palpite === numeroAleatorio) {
    mensagem = 'Parabéns! Você acertou o número em 1 tentativa.';
  } else {
    if (palpite < numeroAleatorio) {
        mensagem = 'Tente um número maior.';
    } else {
        mensagem = 'Tente um número menor.';
    }
  } 

  return {
    mensagem,
  };
}

module.exports = {
  gerarNumeroAleatorio,
  verificarPalpite,
};