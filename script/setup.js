async function setup() {
  window.addEventListener("click", () => global.input.focus());
  generateAppearingControl(global.fetchedColors);
  setBackground();
  fadeIn(global.input, OPACITY_TRANSITION_INCREMENT * 2);
  fadeIn(global.colorContainer, OPACITY_TRANSITION_INCREMENT * 3);
  initialFadeInColors();
  fadeInColorsListener();
}

function initialFadeInColors() {
  global.colorContainer.innerHTML = "";
  for (let index = 0; index < global.hasAppeared.length; index++) {
    addColor(global.hasAppeared[index][0]);

    if (
      global.colorContainer.children[index].getBoundingClientRect().top <=
      global.colorContainer.getBoundingClientRect().height * 1.2
    ) {
      global.colorContainer.children[index].style.opacity = 1;
      global.hasAppeared[index][1] = true;
    } else {
      removeLastColor();
      break;
    }
  }
}

function fadeInColorsListener() {
  global.colorContainer.addEventListener("scroll", e => {
    for (let index = 0; index < global.hasAppeared.length; index++) {
      if (global.hasAppeared[index][1] == true) continue;

      if (
        global.colorContainer.children[index - 1].getBoundingClientRect().top <=
        global.colorContainer.getBoundingClientRect().height * 1.2
      ) {
        addColor(global.hasAppeared[index][0]);
        global.colorContainer.children[index].style.opacity = 1;
        global.hasAppeared[index][1] = true;
      } else {
        break;
      }
    }
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

function addColor(color) {
  global.colorContainer.innerHTML += `
    <div class="color" id="${color.hex.slice(1)}"></div>
  `;
  document.getElementById(`${color.hex.slice(1)}`).style.backgroundColor =
    color.hex;
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

  console.log(global.currentBackgroundColor.name);
}
