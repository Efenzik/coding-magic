
  const container = document.querySelector(".modal-container");

  const modalHTML = `
    <div class="modal__overlay">
      <div class="modal">
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