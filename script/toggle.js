function toggleListener() {
  global.toggleButton.addEventListener("click", clickCallback);
  global.toggleButton.addEventListener("mouseover", mouseoverCallback);
  global.toggleButton.addEventListener("mouseleave", mouseleaveCallback);

  function clickCallback(e) {
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

  function mouseoverCallback(e) {
    if (!global.hovered) e.target.classList.add("toggle-hovered-f");
    else e.target.classList.add("toggle-hovered-b");
  }

  function mouseleaveCallback(e) {
    if (!global.hovered) e.target.classList.remove("toggle-hovered-f");
    else e.target.classList.remove("toggle-hovered-b");
  }
}
