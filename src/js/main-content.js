import games from './data/games.js';

const mainContainer = document.querySelector('[data-games]');

const html = games
  .map(
    game => `<section id="${game.id}">
    <div class="container">
    <div class="game ${game.class}"></div>
    </div>
    </section>`
  )
  .join('');

mainContainer.innerHTML = html;
