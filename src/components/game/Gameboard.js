import Ship from './Ship';
import getPerimeter from './getPerimeter';

const Gameboard = () => {
  const ships = [];

  const placeShip = (length, x, y, dir) => {
    ships.push({
      ...Ship(length),
      x,
      y,
      dir,
    });
  };

  return {
    ships,
    getPerimeter,
    placeShip,
  };
};

export default Gameboard;
