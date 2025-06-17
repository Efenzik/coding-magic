import stone from '../../images/rps/stone.svg';
import scissors from '../../images/rps/scissors.svg';
import paper from '../../images/rps/paper.svg';

export const rpsInit = () => {
  const gameContainer = document.querySelector('.rock-scissors-paper');

  const gameHtml = `
<div class="rps-game container">
  <h2 class="rps-game__title">Камінь – ножиці – папір</h2>

  <div class="rps-top">
    <div class="rps-options-wrapper">
      <div class="rps-options">
        <button class="rps-option rps-option--rock" id="rps-rock">
          <img src="${stone}" alt="Камінь" class="rps-option__icon" />
        </button>
        <button class="rps-option rps-option--scissors" id="rps-scissors">
          <img src="${scissors}" alt="Ножиці" class="rps-option__icon" />
        </button>
        <button class="rps-option rps-option--paper" id="rps-paper">
          <img src="${paper}" alt="Папір" class="rps-option__icon" />
        </button>
      </div>
    </div>

    <div class="rps-score">
      <h3 class="rps-score__title">Рахунок:</h3>
      <p class="rps-score__item">
        <span class="rps-score__label">Комп’ютер – </span>
        <span class="rps-score__value" id="rps-computer-score">0</span>
      </p>
      <p class="rps-score__item">
        <span class="rps-score__label">Ви – </span>
        <span class="rps-score__value" id="rps-player-score">0</span>
      </p>
    </div>
  </div>

  <div class="rps-result" id="rps-round-result">
    Оберіть варіант, щоб почати гру
  </div>

  <button class="rps-computer-choice-btn" id="rps-show-computer" disabled>
    Варіант комп’ютера
  </button>

  <hr class="divider" />
</div>
`;
  gameContainer.innerHTML = gameHtml;
};
