import Ship from './Ship';
import getPerimeter from './getPerimeter';

const Gameboard = () => {
  const ships = [];

  const getAllCoordsFromShip = (ship) => {
    let coords = [];

    if (ship.dir === 'X') {
      for (let i = 0; i < ship.length; i++) {
        coords.push([ship.x + i, ship.y]);
      }
    } else if (ship.dir === 'Y') {
      for (let i = 0; i < ship.length; i++) {
        coords.push([ship.x, ship.y + i]);
      }
    } else {
      throw new Error('Ship direction invalid!');
    }

    return coords;
  };

  const getAllShipCoordsOnBoard = () => {
    let coords = [];

    ships.forEach((ship) => {
      coords.push(...getAllCoordsFromShip(ship));
    });

    return coords;
  };

  const placeShip = (length, x, y, dir) => {
    ships.push({
      ...Ship(length),
      x,
      y,
      dir,
    });
  };

  // TODO implement calling ship hit function when hit

  const receiveAttack = (attackCoords) => {
    const coords = getAllShipCoordsOnBoard();
    const stringifiedCoords = coords.map((coord) => {
      return JSON.stringify(coord);
    });
    const stringifiedAttackCoords = JSON.stringify(attackCoords);

    if (stringifiedCoords.includes(stringifiedAttackCoords)) {
      console.log('hit!');
    } else {
      console.log('nope!');
    }
  };

  return {
    ships,
    getPerimeter,
    placeShip,
    receiveAttack,
  };
};

export default Gameboard;
