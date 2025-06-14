export const DinosaurInit = () => {
  class GameDinosaur {
    constructor(dinosaur, gameArea) {
      this.dinosaur = dinosaur;
      this.gameArea = gameArea;
      this.gameOver = false;
      this.isJumping = false;
      this.gameModalStart();
    }
    init() {
      document.addEventListener('keydown', event => {
        if (event.code === 'Space' && !this.isJumping && !this.gameOver) {
          event.preventDefault();
          this.jump();
        }
      });
      this.gameArea.addEventListener('mousedown', () => {
        if (!this.isJumping && !this.gameOver) {
          this.jump();
        }
      });

      this.renderObstacles();
      this.checkCollision();
    }

    jump() {
      this.isJumping = true;
      this.dinosaur.classList.add('jump');

      setTimeout(() => {
        this.isJumping = false;
        this.dinosaur.classList.remove('jump');
      }, 500);
    }

    checkCollision() {
      const gameProcess = () => {
        if (this.gameOver === true) return;
        const obstacle = this.gameArea.querySelector('.rocket');
        const obstacleRect = obstacle.getBoundingClientRect();
        const catRect = this.dinosaur.getBoundingClientRect();
        if (
          catRect.right > obstacleRect.left &&
          catRect.left < obstacleRect.right &&
          catRect.bottom > obstacleRect.top
        ) {
          this.endGame(obstacle);
          return;
        }

        requestAnimationFrame(gameProcess);
      };
      requestAnimationFrame(gameProcess);
    }

    renderObstacles() {
      const obstacle = document.createElement('div');
      obstacle.classList.add('rocket');
      obstacle.style.height = this.randomHeight();
      this.gameArea.appendChild(obstacle);

      const animationHandler = () => {
        obstacle.removeEventListener('animationiteration', animationHandler);
        this.gameArea.removeChild(obstacle);
        if (!this.gameOver) {
          this.renderObstacles();
        }
      };
      obstacle.addEventListener('animationiteration', animationHandler);
    }

    randomHeight() {
      return `${Math.random() * (70 - 40) + 30}px`;
    }

    endGame(obstacle) {
      obstacle.style.animationPlayState = 'paused';
      this.gameOver = true;
      this.gameOverModal();
    }

    createModal(message, buttonText, buttonCallback) {
      const modalHtml = `
      <div class="dinosaur__modal">
        <p class="dinosaur__message">${message}</p>
        <button class="dinosaur__start button">${buttonText}</button>
      </div>
    `;
      this.gameArea.insertAdjacentHTML('beforeend', modalHtml);

      const modal = this.gameArea.querySelector('.dinosaur__modal');
      modal.classList.add('show');

      const retryButton = this.gameArea.querySelector('.dinosaur__start');
      retryButton.addEventListener('click', buttonCallback);
    }
    gameModalStart() {
      this.createModal('Зіграємо?', 'Почати гру!', () => {
        const modal = this.gameArea.querySelector('.dinosaur__modal');
        modal.classList.remove('show');
        setTimeout(() => {
          modal.remove();
        }, 250);
        this.init();
      });
    }
    gameOverModal() {
      this.createModal('Ви програли!', 'Спробувати знову', () =>
        this.restartGame()
      );
    }

    restartGame() {
      this.gameArea.querySelector('.dinosaur__modal').remove();
      this.gameArea.querySelector('.rocket').remove();
      this.gameOver = false;
      this.renderObstacles();
      this.checkCollision();
    }
  }
  const gameContainer = document.querySelector('.dinosaur-game');
  const gameHtml = `<div class="game__container">
                        <h2 class="game__title">Google динозавр</h2>
                        <div class="game__area">
                            <div class="dinosaur"></div>
                        </div>
                    </div>`;
  gameContainer.innerHTML = gameHtml;

  const dinosaur = gameContainer.querySelector('.dinosaur');
  const gameArea = document.querySelector('.game__area');
  new GameDinosaur(dinosaur, gameArea);
};
