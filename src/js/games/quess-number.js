export const quessNumber = () => {
    const gameContainer = document.querySelector(".quess-number")

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
      
    </form>
    <p class="interactive__result">Вгадай число, яке загадав комп’ютер</p>`
}
