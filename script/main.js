const OPACITY_TRANSITION_INCREMENT = 500;

global = {
  body: document.querySelector("body"),
  input: document.getElementById("search"),
  form: document.getElementById("form"),
  colorContainer: document.getElementsByClassName('color-container')[0],
  currentValue: new String(),
  currentBackgroundColor: new String(),
  currentArray: this.fetchedColors,
  hasAppeared: new Array(),
  fetchedColors: new Array(),
  noPerRow: 0,
  rowHeight: 0,
  ids: new Array(),
  lastSelected: null,
  currentSelected: null,
  lastHovered: null,
  currentHovered: null
};

window.onload = init;

function init() {
  fetchColors()
    .then(() => setup())
    .then(() => run());
}
