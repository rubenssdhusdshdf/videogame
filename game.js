const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", startGame); // helps to execute the function when the window loads

function startGame() {
  game.fillStyle = "purple";
  game.font = "25px Verdana";
}
