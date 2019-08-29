function buttonEventInit() {
  global.ids.forEach(id => {
    if (document.getElementById(id) != null) {
      document.getElementById(id).addEventListener("mousedown", clickCallback);
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
  global.body.style.transition = "background-color 1500ms ease-in-out 200ms";
  global.body.style.backgroundColor = `#${e.target.id}`;
  if (!hasSelected()) {
    global.lastSelected = e.target;
    global.currentSelected = global.lastSelected;
    e.target.classList.remove("hovered");
    global.currentSelected.classList.add("selected");
  } else {
    global.ids.forEach(id => {
      if (document.getElementById(id) != null) {
        document.getElementById(id).classList.remove("selected");
      }
    });
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
    global.ids.forEach(id => {
      if (document.getElementById(id) != null) {
        document.getElementById(id).classList.remove("hovered");
      }
    });
    e.target.classList.add("hovered");
    global.currentHovered = e.target;
  }
}

function mouseleaveCallback(e) {
  global.currentHovered.classList.remove("hovered");
}
