import games from './data/games.js';
import { filterByCatecories } from './filter-games.js';

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
games.forEach(game => {
  if (game.init) {
    game.init();
  }
});

//фільтрація
const filteredByCategoriesBtn = document.querySelector('[data-filter]');
const handleFilter = event => {
  if (event.target.tagname === 'BUTTON') {
    const category = event.target.dataset.category;
    const filteredGamees = filterByCatecories(category, gamees);
  }
};
s;

filteredByCategoriesBtn.addEventListener('click', handleFilter);
