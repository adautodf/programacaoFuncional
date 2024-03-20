if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupGame);
} else {
  setupGame();
}

function setupGame() {
  const icons = ['🍎', '🍊', '🍋', '🍉', '🍇', '🍓', '🍒', '🥝'];


  const shuffledIcons = icons.concat(icons).sort(() => Math.random() - 0.5);

  const board = document.createElement('div');
  board.className = 'board';
  document.getElementById('jogoContainer').appendChild(board);

  const cards = shuffledIcons.map((icon, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = index;
    card.dataset.icon = icon;
    card.addEventListener('click', flipCard);
    return card;
  });

  board.append(...cards);

  let flippedCards = [];
  let matchedPairs = 0;
  let isLocked = false;

  function flipCard() {
    if (isLocked) return;
    const card = this;

    if (!card.textContent && flippedCards.length < 2 && !flippedCards.includes(card)) {
      card.textContent = card.dataset.icon;
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        if (firstCard.dataset.icon === secondCard.dataset.icon) {
          matchedPairs++;
          firstCard.classList.add('matched');
          secondCard.classList.add('matched');
          if (matchedPairs === icons.length) {
            setTimeout(() => {
              alert('Parabéns! Você ganhou!');
              resetGame();
            }, 500);
          }
        } else {
          isLocked = true;
          setTimeout(() => {
            firstCard.textContent = '';
            secondCard.textContent = '';
            isLocked = false;
          }, 1000);
        }
        flippedCards = [];
      }
    }
  }

  function resetGame() {
    matchedPairs = 0;
    isLocked = false;
    flippedCards = [];
    board.innerHTML = '';
    setupGame();
  }
}
