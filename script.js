"use strict";

const game = function () {
  const startRange = 1;
  const endRange = 100;

  const isNumber = function (num) {
    num += "";
    return !isNaN(parseFloat(num)) && isFinite(num);
  };

  const getNumber = function (num) {
    return parseFloat(num);
  };

  const startGame = function () {
    const secretNumber = startRange + Math.floor(Math.random() * endRange);
    console.log(secretNumber);
    const gameRound = function () {
      let requestNumber;

      const getRequest = function () {
        requestNumber = prompt(`Угадай число от ${startRange} до ${endRange}`);
        if (requestNumber != null && !isNumber(requestNumber)) {
          console.log("Введи число!");
          getRequest();
        }
        return requestNumber != null ? getNumber(requestNumber) : null;
      };
      requestNumber = getRequest();
      switch (true) {
        case requestNumber == null:
          //return null;
          break;
        case requestNumber == secretNumber:
          console.log("Поздравляю, Вы угадали!!!");
          break;
        case requestNumber > secretNumber:
          console.log("Загаданное число меньше");
          gameRound();
          break;
        case requestNumber < secretNumber:
          console.log("Загаданное число больше");
          gameRound();
          break;
      }
      return null;
    };

    const gameResult = gameRound();
    if (gameResult == null) {
      return;
    }

    // const repeatGame = confirm("Хотели бы сыграть еще?");
    // if (repeatGame) {
    //   startGame();
    // }
  };

  startGame();
  console.log("Игра окончена.");
  console.log("Вы молодец! Ждем вас снова.");
};

game();
