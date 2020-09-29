let dimension = 9;
let startGame = function () {
  let game = document.getElementById("game");
  for (let i = 0; i < dimension; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < dimension; j++) {
      let box = document.createElement("div");
      box.className = ` box center`;
      box.setAttribute("id", `${i.toString() + j.toString()}`);
      box.addEventListener("click", handleClick(box, i, j));
      row.appendChild(box);
    }
    game.appendChild(row);
  }
  let button = document.getElementById("Button");
  button.classList.add("hide");
};

let handleClick = function (box, i, j) {
  box.selected = "true";
};
