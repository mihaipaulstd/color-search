async function fetchColors() {
  await fetch("https://api.color.pizza/v1/")
    .then(res => res.json())
    .then(obj =>
      obj.colors.forEach((color, index) => {
          global.fetchedColors.push(color);

      })
    );
}
