const OPACITY_TRANSITION_INCREMENT = 500;

global = {
  body: document.querySelector("body"),
  input: document.getElementById("search"),
  form: document.getElementById("form"),
  colorContainer: document.getElementsByClassName('color-container')[0],
  toggleContainer: document.getElementById('toggle-container'),
  toggleButton: document.getElementById('toggle-button'),
  toggled: false,
  toggleInProgress: false,
  currentValue: new String(),
  currentBackgroundColor: new String(),
  currentArray: this.fetchedColors,
  hasAppeared: new Array(),
  fetchedColors: new Array(),
  rowHeight: 0,
  ids: new Array(),
  lastSelected: null,
  currentSelected: null,
  currentHovered: null
};

window.onload = init;

function init() {
  fetchColors()
    .then(() => setup())
    .then(() => run());
}
