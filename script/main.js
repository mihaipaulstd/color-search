const OPACITY_TRANSITION_INCREMENT = 500;

global = {
  body: document.querySelector("body"),
  input: document.getElementById("search"),
  colorContainer: document.querySelector('.color-container'),
  currentBackgroundColor: new String(),
  hasAppeared: new Array(),
  colors: Array.from(document.getElementsByClassName("color")),
  fetchedColors: new Array(),
};

window.addEventListener("load", init);

function init() {
  fetchColors()
    .then(() => setup())
    .then(() => run());
}
