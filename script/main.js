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
  currentBackgroundColor: null,
  referenceArray: new Array(),
  fetchedColors: new Array(),
  rowHeight: 0,
  ids: new Array(),
  lastSelected: null,
  currentSelected: null,
  currentHovered: null
};

window.onload = init;

async function init() {
  await fetchColors();
  await setup();
  run();
}
