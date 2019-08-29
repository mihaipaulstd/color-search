function toggleListener() {
  global.toggleButton.addEventListener("click", toggleCallback);

  function toggleCallback(e) {
    if (!global.toggleInProgress)
      if (!global.toggled) {
        global.toggleInProgress = true;
        e.target.classList.add("button-toggled");
        global.colorContainer.classList.add("toggled");
        global.toggleContainer.classList.add("toggled");
        global.toggled = true;
        setTimeout(() => {
          global.toggleInProgress = false;
        }, 500);
      } else {
        global.toggleInProgress = true;
        e.target.classList.remove("button-toggled");
        global.colorContainer.classList.remove("toggled");
        global.toggleContainer.classList.remove("toggled");
        global.toggled = false;
        setTimeout(() => {
          global.toggleInProgress = false;
        }, 500);
      }
  }
}
