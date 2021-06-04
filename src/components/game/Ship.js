const Ship = (length) => {
  const ship = Array(length).fill(false);

  const getHits = () => ship;

  const hit = (hitLocation) => {
    if (hitLocation >= ship.length) {
      throw new Error('Hit is outside of ship bounds');
    } else if (ship[hitLocation] === true) {
      throw new Error('Already hit in that location!');
    } else {
      ship[hitLocation] = true;
    }
  };

  const isSunk = () => !ship.includes(false);

  return {
    length,
    getHits,
    hit,
    isSunk,
  };
};

export default Ship;
