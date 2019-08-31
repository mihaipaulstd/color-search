function setup() {
  generateReferenceArray(global.fetchedColors);
  setColorHeight(window.innerWidth <= 768 ? 100 : 200);
  resizeListener();
  toggleListener();
  setBackground();
  fadeIn(global.input, OPACITY_TRANSITION_INCREMENT * 2);
  fadeIn(global.colorContainer, OPACITY_TRANSITION_INCREMENT * 3);
  fadeIn(global.toggleContainer, OPACITY_TRANSITION_INCREMENT * 4);
  fadeIn(global.toggleButton, OPACITY_TRANSITION_INCREMENT * 5);
  fadeInColors();
  fadeInColorsListener();
}

function setColorHeight(height, element) {
  if (!element) {
    global.colorSize = height;
  } else {
    global.colorContainer.style.gridTemplateColumns = `repeat(auto-fill, minmax(${height}px, 1fr))`;
    global.colorContainer.style.gridAutoRows = `${height}px`;

    element.style.height = `${height}px`;
  }
}
function fadeInColors() {
  global.colorContainer.innerHTML = "";
  check("notlistener");
}

function fadeInColorsListener() {
  global.colorContainer.addEventListener("scroll", e => {
    check("listener");
  });
}
function check(key) {
  for (let index = 0; index < global.referenceArray.length; index++) {
    switch (key) {
      case "listener":
        if (global.referenceArray[index][1] == true) continue;
        break;
      default:
        break;
    }

    global.ids.push(
      addColor({
        color: global.referenceArray[index][0],
        isVisible: true,
        size: global.colorSize
      })
    );

    if (
      global.colorContainer.children[index].getBoundingClientRect().top <=
      (key == "listener"
        ? window.innerHeight * 1.2
        : global.toggled
        ? window.innerHeight * 1.7
        : window.innerHeight)
    ) {
      global.referenceArray[index][1] = true;
      if (global.currentSelected != null)
        if (
          global.colorContainer.children[index].id == global.currentSelected.id
        ) {
          global.colorContainer.children[index].classList.add("selected");
        }
    } else {
      global.referenceArray[index][1] = false;
      removeLastColor();
      
      break;
    }
  }
  buttonEventInit();
}

function resizeListener() {
  window.addEventListener("resize", e => {
    generateReferenceArray(global.fetchedColors);
    fadeInColors();
  });
}

function removeLastColor() {
  let colorIndex = global.colorContainer.innerHTML.lastIndexOf("<div");
  global.colorContainer.innerHTML = global.colorContainer.innerHTML.slice(
    0,
    colorIndex
  );
}

function generateReferenceArray(array) {
  global.referenceArray = array.map(color => [color, false]);
}

function addColor(options = {}) {
  const {
    color = global.referenceArray[0][0],
    isVisible = true,
    size = 200
  } = options;
  const div = createColorDiv(color);
  addColorDivToContainer(div);
  if (isVisible) {
    styleDiv(div, color.hex);
    setColorHeight(size, document.getElementById(div.id));
    return div.id;
  }
  function createColorDiv(color) {
    const div = document.createElement("div");
    div.classList.add("color");
    let id = color.hex.slice(1);
    div.id = id;
    return div;
  }
  function addColorDivToContainer(div) {
    document.getElementsByClassName("color-container")[0].appendChild(div);
  }
  function styleDiv(div, color) {
    div.style.backgroundColor = color;
    div.style.opacity = 1;
  }
}
function fadeIn(element, delay = 0) {
  setTimeout(() => {
    element.style.opacity = 1;
  }, delay);
}

function setBackground(options = {}) {
  const {
    color = global.fetchedColors[
      Math.floor(Math.random() * global.fetchedColors.length)
    ].hex,
    transition = "background-color 1500ms ease-in-out"
  } = options;
  global.currentBackgroundColor = color;
  global.body.style.transition = transition;
  global.body.style.backgroundColor = color;
}
