export const calcTimeInit = () => {
  const gameContainer = document.querySelector('.calculator-time');
  const gameHtml = `
  <section class="calc-time-block">
    <div class="container calc-container">
      <h2 class="calc-time-title">Калькулятор часу</h2>
      <div class="calc-main-information">
        <input class="calct-input" type="number" placeholder="Введіть число" />
        <button class="calct-button"></button>
        <p class="calct-skip">----------</p>
        <span class="calct-reward"></span>
      </div>
    </div>
  </section>`;

  gameContainer.innerHTML = gameHtml;

  const timeInput = document.querySelector('.calct-input');
  const timeButton = document.querySelector('.calct-button');
  const timeResult = document.querySelector('.calct-reward');

  timeButton.addEventListener('click', () => {
    const value = parseInt(timeInput.value);
    const totalHours = Math.floor(value / 60);
    const minutes = value % 60;
    const days = Math.floor(totalHours / 24);
    const hours = totalHours % 24;

    const fullDays = String(days).padStart(2, '0');
    const fullHours = String(hours).padStart(2, '0');
    const fullMinutes = String(minutes).padStart(2, '0');

    timeResult.textContent = `${fullDays} дн. ${fullHours} год. ${fullMinutes} хв.`;
  });
};
