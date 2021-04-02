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
    // headboard
    perimeter.push(
      [ship.x - 1, ship.y - 1],
      [ship.x, ship.y - 1],
      [ship.x + 1, ship.y - 1]
    );

    // baseboard
    perimeter.push(
      [ship.x - 1, ship.y + ship.length],
      [ship.x, ship.y + ship.length],
      [ship.x + 1, ship.y + ship.length]
    );

    for (let i = 0; i < ship.length; i++) {
      // left edge
      perimeter.push([ship.x - 1, ship.y + i]);

      // right edge
      perimeter.push([ship.x + 1, ship.y + i]);
    }
  } else {
    throw new Error('Ship direction invalid!');
  }

  return perimeter;
};

export default getPerimeter;
