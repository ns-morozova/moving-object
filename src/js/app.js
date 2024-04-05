import GamePlay from "./GamePlay";

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector("#game-container"));
gamePlay.drawUi();
function draw() {
    gamePlay.draw();
}

setInterval(draw, 3000);