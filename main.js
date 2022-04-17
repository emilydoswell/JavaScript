import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));


var wordToDisplay = "Codecademy";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(wordToDisplay, letterColors);

bubbleShape = 'square';

bounceBubbles();

const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);

ReactDOM.render(h1, document.getElementById('app'));
