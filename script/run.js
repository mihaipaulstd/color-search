function run() {
  global.input.addEventListener("input", e => {
    e.preventDefault();
    global.colorContainer.innerHTML = "";
    global.currentValue = e.target.value;
    setArray();
    generateAppearingControl(global.currentArray);
    fadeInColors();
    fadeInColorsListener();
  });
}

function setArray() {
  let array = new Array();
  for (let index = 0; index < global.fetchedColors.length; index++) {
    if (
      global.fetchedColors[index].name
        .toLowerCase()
        .includes(global.currentValue.toLowerCase())
    ) {
      array.push(global.fetchedColors[index]);
    }
  }
  global.currentArray = array;
}
