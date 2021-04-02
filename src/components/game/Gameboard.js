import Ship from './Ship';

const Gameboard = () => {
  const ships = [];

  const getPerimeter = (ship) => {
    let perimeter = [];

    if (ship.dir === 'X') {
      // headboard
      perimeter.push(
        [ship.x - 1, ship.y - 1],
        [ship.x - 1, ship.y],
        [ship.x - 1, ship.y + 1]
      );

      // baseboard
      perimeter.push(
        [ship.x + ship.length, ship.y - 1],
        [ship.x + ship.length, ship.y],
        [ship.x + ship.length, ship.y + 1]
      );

      for (let i = 0; i < ship.length; i++) {
        // top edge
        perimeter.push([ship.x + i, ship.y - 1]);

        // bottom edge
        perimeter.push([ship.x + i, ship.y + 1]);
      }
    } else if (ship.dir === 'Y') {
      console.log('TODO add getPerimeter Y');
    } else {
      throw new Error('Ship direction invalid!');
    }

    return perimeter;
  };

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
