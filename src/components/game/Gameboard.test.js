const Gameboard = require('./Gameboard.js');

describe('Gameboard', () => {
  it('ships can be placed', () => {
    const board = Gameboard();
    board.placeShip(2, 2, 2, 'Y');

    expect(board.ships[0].x).toEqual(2);
  });
});
