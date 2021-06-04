import $ from 'jquery';
import './DomGameboard.css';

const DomGameboard = (() => {
  const click = (event) => {
    console.log(event.target.dataset.coords);
  };

  const render = () => {
    const dimensions = 8; // if changing, must change in css as well
    const container = $('<div></div>').addClass('gameboard');

    for (let y = 0; y < dimensions; y++) {
      for (let x = 0; x < dimensions; x++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.dataset.coords = `${x}, ${y}`;
        tile.textContent = `${x}, ${y}`;
        tile.addEventListener('click', click);
        container.append(tile);
      }
    }

    $('body').append(container);
  };

  return { render };
})();

export default DomGameboard;
