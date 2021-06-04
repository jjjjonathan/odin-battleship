import Ship from './Ship';
import getPerimeter from './getPerimeter';

const Gameboard = () => {
  const ships = [];
  const misses = [];

  const getShips = () => ships;
  const getMisses = () => misses;

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

  const findShipIndexByCoords = (coords) => {
    for (let i = 0; i < ships.length; i++) {
      const allCoords = getAllCoordsFromShip(ships[i]);
      const stringifiedCoords = allCoords.map((coord) => {
        return JSON.stringify(coord);
      });
      const stringifiedFindCoords = JSON.stringify(coords);
      console.log(stringifiedCoords, stringifiedFindCoords);
      if (stringifiedCoords.includes(stringifiedFindCoords)) {
        return i;
      }
    }
  };

  const findPositionOnShipByCoords = (
    shipStartCoords,
    shipDirection,
    positionCoords
  ) => {
    if (shipDirection === 'X') {
      return positionCoords[0] - shipStartCoords[0];
    } else if (shipDirection === 'Y') {
      return positionCoords[1] - shipStartCoords[1];
    }
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
      const hitShipIndex = findShipIndexByCoords(attackCoords);
      const hitShip = ships[hitShipIndex];
      const positionOnShip = findPositionOnShipByCoords(
        [hitShip.x, hitShip.y],
        hitShip.dir,
        attackCoords
      );
      hitShip.hit(positionOnShip);
    } else {
      console.log('nope!');
      misses.push(attackCoords);
    }
  };

  const allSunk = () => {
    return ships.every((ship) => ship.isSunk());
  };

  return {
    getShips,
    getMisses,
    getPerimeter,
    placeShip,
    receiveAttack,
    findShipIndexByCoords,
    allSunk,
  };
};

export default Gameboard;
