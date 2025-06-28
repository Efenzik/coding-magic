import sword from '../images/modal-windows/icon-sword.svg.svg'
import puzzle from '../images/modal-windows/icon-puzzle.svg.svg'
import devgame from '../images/modal-windows/icon-devgame.svg.svg'
import tictactoe from '../images/modal-windows/icon-tictactoe.svg.svg'

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribe-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("user-email");
    const email = emailInput.value.trim();

    if (email) {
      showModal(); 
      form.reset(); 
    }
  });

  function showModal() {
    const modal = document.createElement("div");
    modal.innerHTML = `
      <div class="footer__modal__overlay">
        <div class="modal__box">

         <div class="footer__modal__icons footer__modal__icons--left">
            
            <div class="footer__icon__container--lefttop">
                <img src="${sword}" alt="Піпетка" class="footer__icon top">
            </div>
      
               <div class="footer__icon__container--leftbottom">
                 <img src="${puzzle}" alt="Пазл" class="footer__icon bottom">
                </div>
      
             </div>
          <button class="close__modal">&times;</button>
          <h2 class="footer__modal__title">Дякую за підписку!</h2>

        <div class="footer__modal__icons footer__modal__icons--right">
        
        <div class="footer__icon__container--righttop">
          <img src="${devgame}" alt="Геймпад" class="footer__icon top">
        </div>

        <div class="footer__icon__container--rightbottom">
          <img src="${tictactoe}" alt="Кубик" class="footer__icon bottom">
        </div>

       </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".close__modal").addEventListener("click", () => {
      modal.remove();
    });
  }
});
