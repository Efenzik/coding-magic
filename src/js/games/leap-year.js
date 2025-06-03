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
      
    </form>
    <p class="interactive__result"></p>`

    gameContainer.innerHTML = gameHtml;
}







// import modules from './data/games';

// const app = document.getElementById('app');

// const filteredModules = modules.filter(
//   (mod) => mod.id === 1 || mod.id === 2
// );

// filteredModules.forEach((mod) => {
//   const section = document.createElement('section');
//   section.className = `module ${mod.class}`;

// section.innerHTML = `
    
//     <h2 class="interactive__title">${mod.name}</h2>
//     <div class="input-group">
//       <input 
//         type="text" 
//         placeholder="${mod.class === 'leap-year' ? 'Введіть рік народження' : 'Введіть число'}" 
//         class="interactive__input"
//       />
//       <button class="interactive__button">
//         <span class="interactive__icon">🔍</span>
//       </button>
//       <p class="interactive__result"></p>
//     </div>
    
//     <hr />
//   `;


//   app.appendChild(section);

//   const input = section.querySelector('.interactive__input');
//   const button = section.querySelector('.interactive__button');
//   const result = section.querySelector('.interactive__result');

//   if (mod.class === 'leap-year') {
//     button.addEventListener('click', () => {
//       const year = parseInt(input.value, 10);
//       result.classList.remove('green', 'red');

//       const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//       if (isLeap) {
//         result.textContent = 'Ви народилися у високосний рік!';
//         result.classList.add('red');
//       } else {
//         result.textContent = 'Ви не народилися у високосний рік!';
//         result.classList.add('green');
//       }
//     });
//   }


//   if (mod.class === 'quess-number') {
//   button.addEventListener('click', () => {
//     const guess = parseInt(input.value, 10);
//     result.classList.remove('green', 'red'); 

//     const random = Math.floor(Math.random() * 1000) + 1;

//     if (guess === random) {
//       result.textContent = `Вітаю, ви вгадали число! ${random}`;
//       result.classList.add('red');
//     } else {
//       result.textContent = `Ви програли, комп’ютер загадав ${random}`;
//       result.classList.add('green');
//     }
//   });
// }


// });


