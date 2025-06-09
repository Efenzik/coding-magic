export const footballInit = () => {
  const gameContainer = document.querySelector('.football');
  const gameHtml = `<h2 class="game__title">Футбол</h2>
  <div class=" football__field" id="field">
  <div class="football__ball" id="ball">
  <img class="football__ball--img" alt="ball" src=""></div>
  <div class="underline"></div>
  </div>`;

  gameContainer.innerHTML = gameHtml;

  const field = document.querySelector('#field');
  const ball = document.querySelector('#ball');

  const handleBall = event => {
    event.preventDefault();
    const fieldRect = field.getBoundingClientRect();

    let newX = event.clientX - fieldRect.left - 25;
    let newY = event.clientY - fieldRect.top - 25;

    ball.style.left = `${newX}px`;
    ball.style.top = `${newY}px`;
  };
  field.addEventListener('click', handleBall);
};
