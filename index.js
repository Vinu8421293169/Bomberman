let dimension = 9;
let score = 0;

let bombArray = [];
let gameOver = false;
let boxCount = 0;

let randomValue = function () {
  return Math.round(Math.random() * 9);
};

let updateScore = function () {
  document.getElementById("game-score").innerHTML = score;
};

let addbombs = function () {
  for (let i = 0; i < 10; i++) {
    let value = Math.round(Math.random() * 81);
    console.log(value);
    if (bombArray.includes(value)) {
      i--;
    } else {
      document.getElementById(value.toString()).classList.add("bomb");
      bombArray.push(value);
    }
  }
};

let displaybomb = function () {
  for (let i = 0; i < bombArray.length; i++) {
    document.getElementById(bombArray[i].toString()).classList.add("color-red");
  }
};

let startGame = function () {
  let button = document.getElementById("button");
  button.classList.remove("hide");
  let count = 1;
  let game = document.getElementById("game");
  game.innerHTML = "";
  for (let i = 0; i < dimension; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < dimension; j++) {
      let box = document.createElement("div");
      box.className = ` box center`;
      box.setAttribute("id", `${count}`);
      box.addEventListener("click", () => handleClick(box, i, j), {
        once: true
      });
      count++;
      row.appendChild(box);
    }
    game.appendChild(row);
  }
  addbombs();
  button.classList.add("hide");
};

let restart = function () {
  if (gameOver === false) return;
  gameOver = false;
  dimension = 9;
  score = 0;
  updateScore();
  bombArray = [];
  gameOver = false;
  boxCount = 0;
  document.getElementById("restart-game").classList.add("hide");
  startGame();
  document.getElementById("game-result").classList.add("hide");
};

let handleClick = function (el, i, j) {
  if (gameOver === true) return;

  if (el.classList.contains("bomb")) {
    el.classList.add("color-red");
    gameOver = true;
    displaybomb();
    document.getElementById("game").className = "hide";
    document.getElementById("restart-game").classList.remove("hide");
    let result = document.getElementById("game-result");
    result.classList.remove("hide");
    result.innerHTML = "Game Over";
  } else {
    boxCount += 1;
    el.classList.add("color-green");
    let value = randomValue();
    el.innerHTML = value;
    score += value;
    updateScore();
    if (boxCount === 71) {
      document.getElementById("game").className = "hide";
      document.getElementById("restart-game").classList.remove("hide");
      let result = document.getElementById("game-result");
      result.classList.remove("hide");
      result.innerHTML = "Congratulations you won the game";
    }
  }
};
