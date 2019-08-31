function run() {
  global.input.addEventListener("input", e => {
    e.preventDefault();
    clearContainer();
    getInputValue(e);
    setSearchedArray();
    generateReferenceArray(global.referenceArray);
    fadeInColors();
    fadeInColorsListener();
  });
}

function setSearchedArray() {
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
  global.referenceArray = array;
}

function clearContainer() {
  global.colorContainer.innerHTML = "";
}

function getInputValue(e) {
  global.currentValue = e.target.value;
}
