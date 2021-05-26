import './style.css';

import Intro from './components/dom/Intro';
import DomGameboard from './components/dom/DomGameboard';

import Ship from './components/game/Ship';
import Gameboard from './components/game/Gameboard';

Intro.render();
DomGameboard.render();

const board = Gameboard();
console.log(board.ships);

// board.placeShip(2, 2, 2, 'Y');
board.placeShip(1, 4, 2, 'X');
board.placeShip(3, 0, 0, 'X');

console.log('coords:');
console.log(board.findShipIndexByCoords(0, 2));

console.log('_________');
console.log(board.ships[0]);
console.log(board.getPerimeter(board.ships[0]));

board.receiveAttack([0, 0]);
console.log('sunk?', board.ships[1].isSunk());
board.receiveAttack([1, 0]);
console.log('sunk?', board.ships[1].isSunk());
board.receiveAttack([2, 0]);
console.log('sunk?', board.ships[1].isSunk());
console.log(board.misses);
board.receiveAttack([4, 2]);
console.log('ALL sunk?', board.allSunk());
