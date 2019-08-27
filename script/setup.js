async function setup() {
  setBackground();
  window.addEventListener("click", () => global.input.focus());
  fadeIn(global.input, OPACITY_TRANSITION_INCREMENT * 2);
  fadeIn(global.colorContainer, OPACITY_TRANSITION_INCREMENT * 3);
  generateAppearingArray();
  fadeInColors();
  fadeInColorsListener();
  setScrollTrackColor(global.currentBackgroundColor.hex);
}


function fadeInColors() {
  for (let index = 0; index < global.fetchedColors.length; index++) {
    addColor(global.fetchedColors[index]);

    console.log(index);
    if (
      global.colorContainer.children[index].getBoundingClientRect().top <=
        global.colorContainer.getBoundingClientRect().height &&
      global.hasAppeared[index][1] == false
    ) {
      fadeIn(global.colorContainer.children[index]);
      (global.hasAppeared[index][1] = true);
    } else {
      break;
    }
    
  }
}



function fadeInColorsListener() {
  global.colorContainer.addEventListener("scroll", e => {
    for (let index = 0; index < global.fetchedColors.length - index; index++) {
      if(global.hasAppeared[index][1] == true)
      continue;
      
      if (
        global.colorContainer.children[index].getBoundingClientRect().top <=
          global.colorContainer.getBoundingClientRect().height
        
      ) {
        addColor(global.fetchedColors[index]);

        fadeIn(global.colorContainer.children[index]);
        console.log((global.hasAppeared[index][1] = true));
      } else {
        break;
      }
    }
  });
}


function generateAppearingArray() {
  global.hasAppeared = global.fetchedColors.map(color => [color, false]);
}

function addColor(color) {
  global.colorContainer.innerHTML += `
    <div class="color" id="${color.hex.slice(1)}"></div>
  `;
  document.getElementById(`${color.hex.slice(1)}`).style.backgroundColor = color.hex;
}

function fadeIn(element, delay = 0) {
    element.style.transition = `opacity 500ms ease-in-out ${delay}ms`
    element.style.opacity = 1;
}

function setBackground() {
  global.currentBackgroundColor =
    global.fetchedColors[
      Math.floor(Math.random() * global.fetchedColors.length)
    ];
  global.body.style.backgroundColor = global.currentBackgroundColor.hex;

  console.log(global.currentBackgroundColor.name);
}


