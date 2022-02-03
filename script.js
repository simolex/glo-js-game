"use strict";

const game = function () {
  const startGame = function () {
    console.log("Игра началась!");
    const repeatGame = confirm("Хотели бы сыграть еще?");
    if (repeatGame) {
      startGame();
    }
  };

  startGame();
  console.log("Игра окончена.");
  console.log("Вы молодец! Ждем вас снова.");
};

game();
