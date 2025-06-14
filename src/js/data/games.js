import { calculatorInit } from '../games/calculator';
import { leapYearInit } from '../games/leap-year';
import { footballInit } from '../games/football';
export default [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
    class: 'leap-year',
    init: leapYearInit,
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
    class: 'quess-number',
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
    class: 'rock-scissors-paper',
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
    class: 'calculator',
    init: calculatorInit,
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
    class: 'time-calculator',
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
    class: 'dinosaur',
    init: footballInit,
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
    class: 'football',
    init: footballInit,
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
    class: 'largest-number',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
    class: 'team',
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
    class: 'scienties',
  },
];
