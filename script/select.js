function buttonEventInit() {
  global.ids.forEach(id => {
    if (document.getElementById(id) != null) {
      document.getElementById(id).addEventListener("click", clickCallback);
      document
        .getElementById(id)
        .addEventListener("mouseover", mouseoverCallback);
      document
        .getElementById(id)
        .addEventListener("mouseleave", mouseleaveCallback);
    }
  });
}

function clickCallback(e) {
  if (!hasSelected()) {
    global.lastSelected = e.target;
    global.currentSelected = global.lastSelected;
    e.target.classList.remove("hovered");
    global.currentSelected.classList.add("selected");
  } else {
    global.lastSelected = global.currentSelected;
    global.currentSelected = e.target;
    global.lastSelected.classList.remove("selected");
    global.currentSelected.classList.add("selected");
    e.target.classList.remove("hovered");
  }
  function hasSelected() {
    let hasSelected = false;
    global.ids.forEach(id => {
      if (document.getElementById(id) != null)
        if (document.getElementById(id).classList.contains("selected"))
          hasSelected = true;
    });
    return hasSelected;
  }
}

function mouseoverCallback(e) {
  if (!e.target.classList.contains("selected")) {
    global.lastHovered = global.currentHovered;
    global.currentHovered = e.target;
    e.target.classList.add("hovered");
  }
}

function mouseleaveCallback(e) {
  global.lastHovered.classList.remove("hovered");
}
