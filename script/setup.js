async function setup() {
  generateAppearingControl(global.fetchedColors);
  setColorHeight(undefined, 125);
  containerListener();
  resizeListener();
  toggleListener();
  setBackground();
  fadeIn(global.input, OPACITY_TRANSITION_INCREMENT * 2);
  fadeIn(global.colorContainer, OPACITY_TRANSITION_INCREMENT * 3);
  fadeIn(global.toggleContainer, OPACITY_TRANSITION_INCREMENT * 3);
  fadeIn(global.toggleButton, OPACITY_TRANSITION_INCREMENT * 5)
  fadeInColors();

}

function setColorHeight(element = undefined, height) {
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
  for (let index = 0; index < global.hasAppeared.length; index++) {
    switch (key) {
      case "listener":
        if (global.hasAppeared[index][1] == true) continue;
        break;
      default:
        break;
    }

    global.ids.push(
      addColor(global.hasAppeared[index][0], true, global.colorSize)
    );

    if (
      global.colorContainer.children[index].getBoundingClientRect().top <=
      (key == "listener" ? window.innerHeight * 1.7 : (window.innerHeight * 1.7))
    ) {
      global.hasAppeared[index][1] = true;
      if (global.currentSelected != null)
        if (
          global.colorContainer.children[index].id == global.currentSelected.id
        ) {
          global.colorContainer.children[index].classList.add("selected");
        }
    } else {
      
      
      
      global.hasAppeared[index][1] = false;
      removeLastColor();
      break;
    }
  }
  buttonEventInit();
}

function containerListener() {}

function resizeListener() {
  window.addEventListener("resize", e => {
    generateAppearingControl(global.fetchedColors);
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

function generateAppearingControl(array) {
  global.hasAppeared = array.map(color => [color, false]);
}

function addColor(color, listen, size) {
  if (listen) {
    let div = document.createElement("div");
    div.classList.add("color");
    let id = color.hex.slice(1);
    div.id = id;
    document.getElementsByClassName("color-container")[0].appendChild(div);
    document.getElementById(id).style.backgroundColor = color.hex;
    document.getElementById(id).style.opacity = 1;
    setColorHeight(document.getElementById(id), size);
    return id;
  } else {
    let div = document.createElement("div");
    div.classList.add("color");
    document.getElementsByClassName("color-container")[0].appendChild(div);
  }
}
function fadeIn(element, delay = 0) {
  setTimeout(() => {
    element.style.opacity = 1;
  }, delay);
}

function setBackground() {
  global.currentBackgroundColor =
    global.fetchedColors[
      Math.floor(Math.random() * global.fetchedColors.length)
    ];
  global.body.style.backgroundColor = global.currentBackgroundColor.hex;
}
