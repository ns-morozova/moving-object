import GamePlay from "./GamePlay";

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector("#game-container"));
gamePlay.drawUi();

setInterval(() => {
    gamePlay.draw();
}, 3000);