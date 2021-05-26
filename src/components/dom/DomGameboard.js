import $ from 'jquery';
import './DomGameboard.css';

const DomGameboard = (() => {
  const render = () => {
    const dimensions = 8; // if changing, must change in css as well
    const container = $('<div></div>').addClass('gameboard');

    for (let y = 0; y < dimensions; y++) {
      for (let x = 0; x < dimensions; x++) {
        const tile = $('<div></div>').addClass('tile').text(`${x}, ${y}`);
        container.append(tile);
      }
    }

    $('body').append(container);
  };

  return { render };
})();

export default DomGameboard;
