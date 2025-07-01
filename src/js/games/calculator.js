export const calculatorInit = () => {
  const gameContainer = document.querySelector('.calculator');

  const gameHtml = `
  <div class="calculator container">
    <h2 class="calculator__title">Калькулятор</h2>
    <div class="calculator__inner">
      <input
        type="number"
        class="calculator__input calculator__input--left"
        id="calc-input-1"
        placeholder="Введіть число"
        aria-label="Перше число"
      />
      <div class="calculator__operators">
        <button
          type="button"
          class="calculator__operator"
          data-op="add"
          aria-label="Додавання"
        >
        <span class="operator__span" aria-hidden="true">+</span> 
        </button>

        <button
          type="button"
          class="calculator__operator"
          data-op="subtract"
          aria-label="Віднімання"
        >
        <span class="operator__span">−</span>
        </button>

        <button
          type="button"
          class="calculator__operator"
          data-op="multiply"
          aria-label="Множення"
        >
        <span class="operator__span">
        ×
        </span>
        </button>
        
        <button
          type="button"
          class="calculator__operator"
          data-op="divide"
          aria-label="Ділення"
        >
        <span class="operator__span">/</span>
        </button>
      </div>
      <input
        type="number"
        class="calculator__input calculator__input--right"
        id="calc-input-2"
        placeholder="Введіть число"
        aria-label="Друге число"
      />
      <button
          type="button"
          class="calculator__operator"
          data-op="result"
          aria-label="Результат"
        >
        <span class="operator__span">=</span>
        </button>
      
      <input
        type="text"
        class="calculator__result"
        id="calc-result"
        placeholder="Результат"
        readonly
        aria-label="Результат"
      />
    </div>
  </div>
`;
  gameContainer.innerHTML = gameHtml;

  const calc1 = document.getElementById('calc-input-1');
  const calc2 = document.getElementById('calc-input-2');
  const calcRes = document.getElementById('calc-result');
  let op = null;

  document.querySelectorAll('.calculator__operator').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.op;

      if (action === 'result') {
        const a = +calc1.value;
        const b = +calc2.value;
        let result = '';

        if (isNaN(a) || isNaN(b)) {
          result = 'Помилка';
        } else if (op === 'add') {
          result = a + b;
        } else if (op === 'subtract') {
          result = a - b;
        } else if (op === 'multiply') {
          result = a * b;
        } else if (op === 'divide') {
          result = b !== 0 ? a / b : '∞';
        } else {
          result = 'Оберіть операцію';
        }

        calcRes.value = result;
      } else {
        op = action;
      }
    });
  });
};
