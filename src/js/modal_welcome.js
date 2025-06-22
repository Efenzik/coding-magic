import sword from '../images/modal-windows/icon-sword.svg.svg'
import puzzle from '../images/modal-windows/icon-puzzle.svg.svg'
import devgame from '../images/modal-windows/icon-devgame.svg.svg'
import tictactoe from '../images/modal-windows/icon-tictactoe.svg.svg'
  const container = document.querySelector(".modal-container");

  const modalHTML = `
    <div class="modal__overlay">
      <div class="modal">
      <div class="modal__icons modal__icons--left">
      
      <div class="modal__icon__container--lefttop">
          <img src="${sword}" alt="Піпетка" class="modal__icon top">
      </div>

         <div class="modal__icon__container--leftbotton">
           <img src="${puzzle}" alt="Пазл" class="modal__icon bottom">
          </div>

       </div>
      <div class="modal__container">
        <button class="close-btn">&times;</button>
        <p class="modal__text">Привіт!<br>
        Ви потрапили на сайт інтерактивних ігор та завдань<br>
        Надіємось, що вам сподобається і ви отримаєте позитивні емоції!<br>
        Бажаємо Вам гарно провести час!</p>

        <label for="username" class="modal__label">Введіть своє ім’я:</label><br>

        <input class="modal__input" type="text" id="username" placeholder="Ваше ім’я..."><br>
        
        <button class="modal__button" id="saveBtn">Зберегти</button>
        </div>

        <div class="modal__icons modal__icons--right">

        <div class="modal__icon__container--righttop">
         <img src="${devgame}" alt="Геймпад" class="modal__icon top">
        </div>

        <div class="modal__icon__container--rightbotton">
         <img src="${tictactoe}" alt="Кубик" class="modal__icon bottom">
        </div>

       </div>

      </div>
    </div>`;

  container.innerHTML = modalHTML;

  const overlay = container.querySelector('.modal__overlay');
  const closeBtn = container.querySelector('.close-btn');
  const saveBtn = container.querySelector('.modal__button');
  const input = container.querySelector('#username');

  closeBtn.addEventListener("click", () => {
    overlay.remove();
  });

  saveBtn.addEventListener("click", () => {
    const name = input.value.trim();
    if (name !== '') {
      localStorage.setItem('username', name);
      overlay.remove();
    } else {
      alert("Будь ласка, введіть ім’я");
    }
  });


const userNameHeader = document.querySelector(".header__text-user");
function updateUsername() {
  const storedName = localStorage.getItem("username");
  if (storedName) {
    userNameHeader.textContent = storedName;
  }
}
saveBtn.addEventListener("click", () => {
  const name = input.value;
  if (name !== '') {
    localStorage.setItem('username', name);
    updateUsername();
  } else {
    alert("Будь ласка, введіть ім’я");
  }
});