async function setup() {
  noPerRowListener();
  generateAppearingControl(global.fetchedColors);
  setBackground();
  fadeIn(global.input, OPACITY_TRANSITION_INCREMENT * 2);
  fadeIn(global.colorContainer, OPACITY_TRANSITION_INCREMENT * 3);
  fadeInColors();

  fadeInColorsListener();
  window.addEventListener("click", e => {
    global.input.focus();
  });
}

function setRowHeight() {
  console.log(document.getElementsByClassName(".color"));
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

    global.ids.push(addColor(global.hasAppeared[index][0], true));
    if (
      global.colorContainer.children[index].getBoundingClientRect().top <=
      global.colorContainer.getBoundingClientRect().height * 1.5
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

function getNoPerRow() {
  global.noPerRow = 0;
  let max = 200;
  for (let index = 0; index < global.hasAppeared.length; index++) {
    addColor(global.hasAppeared[index][0], false);
    if (
      global.colorContainer.children[index].getBoundingClientRect().top < max
    ) {
      global.noPerRow++;
      global.hasAppeared[index][1] = true;
    } else {
      generateAppearingControl(global.fetchedColors);
      global.colorContainer.innerHTML = "";
      fadeInColors();
      break;
    }
  }
}

function noPerRowListener() {
  window.addEventListener("resize", e => {
    getNoPerRow();
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

function addColor(color, listen) {
  if (listen) {
    let div = document.createElement("div");
    div.classList.add("color");
    let id = color.hex.slice(1);
    div.id = id;
    document.getElementsByClassName("color-container")[0].appendChild(div);
    document.getElementById(id).style.backgroundColor = color.hex;
    document.getElementById(id).style.opacity = 1;

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
