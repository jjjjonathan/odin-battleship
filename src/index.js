import $ from 'jquery';
import './style.css';

import Intro from './components/dom/Intro';

import Ship from './components/game/Ship';
import Gameboard from './components/game/Gameboard';

Intro.render();

const board = Gameboard();
console.log(board.ships);

board.placeShip(2, 2, 2, 'Y');
board.placeShip(1, 4, 2, 'X');

console.log('_________');
console.log(board.ships[0]);
console.log(board.getPerimeter(board.ships[0]));
board.receiveAttack([2, 4]);
