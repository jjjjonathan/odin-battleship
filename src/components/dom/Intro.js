import $ from 'jquery';

const Intro = (() => {
  const header = $('<h1></h1>').text('Battleship');
  const lead = $('<p></p>').text('Start game');

  const render = () => {
    $('body').append(header);
    $('body').append(lead);
  };

  return { render };
})();

export default Intro;
