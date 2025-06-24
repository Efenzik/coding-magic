import games from './data/games.js';
import { filterByCatecories } from './filter-games.js';

const mainContainer = document.querySelector('[data-games]');
const renderGames = (games, container) => {
  const html = games
    .map(
      game => `<section id="${game.id}">
    <div class="container">
    <div class="game ${game.class}"></div>
    </div>
    </section>`
    )
    .join('');

  container.innerHTML = html;
  games.forEach(game => {
    if (game.init) {
      game.init();
    }
  });
};
renderGames(games, mainContainer);
//фільтрація
const filteredByCategoriesBtn = document.querySelector('[data-filter]');
const handleFilter = event => {
  console.log('click');
  if (event.target.tagName === 'BUTTON') {
    const category = event.target.dataset.category;
    console.log(category);
    const filteredGamees = filterByCatecories(category, games);
    renderGames(filteredGamees, mainContainer);
  }
};

filteredByCategoriesBtn.addEventListener('click', handleFilter);
console.log(filteredByCategoriesBtn);
