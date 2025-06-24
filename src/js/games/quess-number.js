import dandruff from '../../images/dandruff.svg'

export const quessNumber = () => {
    const gameContainer = document.querySelector(".quess-number")

    const gameHtml = `<h2 class="interactive__title">Вгадай число, яке загадав комп’ютер</h2> 
     <form class="input-group">
      <input 
        type="number" 
        placeholder="Введіть число" 
        class="quess__number__input"
        min="0"
      />
      <button class="interactive__button">
        <span class="interactive__icon">
          <img src="${dandruff}" alt="лупа" class="search__icon">
        </span>
      </button>
      <p class="interactive__result"></p>
    </form>
    <div class="underline"></div>`

    gameContainer.innerHTML = gameHtml;

  const form = gameContainer.querySelector("form");
  const input = form.querySelector(".quess__number__input");
  const result = form.querySelector(".interactive__result");

  const secretNumber = Math.floor(Math.random() * 10) + 1; 

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userGuessNumber = input.value;

    if (userGuessNumber == secretNumber) {
      result.textContent = `Вітаю, ви вгадали число! ${secretNumber}`;
      result.style.color = "green";
    } else {
      result.textContent = `Ви програли, комп’ютер загадав ${secretNumber}`;
      result.style.color = "red";
    }
  });
}
