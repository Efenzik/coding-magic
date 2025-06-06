export const leapYearInit = () => {
    const gameContainer = document.querySelector(".leap-year")

    const gameHtml = `<h2 class="interactive__title">Перевір в який рік ти народився</h2> 
     <form class="input-group">
      <input 
        type="number" 
        placeholder="Введіть рік народження" 
        class="interactive__input"
        min="0"
      />
      <button class="interactive__button">
        <span class="interactive__icon">🔍</span>
      </button>
      <p class="interactive__result"></p>
    </form>
    <div class="underline"></div>
    `

    gameContainer.innerHTML = gameHtml;

const form = gameContainer.querySelector("form");
const input = gameContainer.querySelector(".interactive__input");
const result = gameContainer.querySelector(".interactive__result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const year = parseInt(input.value);

const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeap) {
      result.textContent = "Ви народилися у високосний рік!";
      result.style.color = "green";
    } else {
      result.textContent = "Ви народилися не у високосний рік!";
      result.style.color = "brown";
    }
  });
}