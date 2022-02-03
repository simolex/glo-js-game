"use strict";

const game = function () {
  const startRange = 1;
  const endRange = 100;
  const countRounds = 10;

  const isNumber = function (num) {
    num += "";
    return !isNaN(parseFloat(num)) && isFinite(num);
  };

  const getNumber = function (num) {
    return parseFloat(num);
  };

  const startGame = function (leftRounds) {
    //let  = true;
    const secretNumber = startRange + Math.floor(Math.random() * endRange);
    console.log(secretNumber);

    const gameRound = function (leftRounds) {
      let requestNumber, needReplay;

      const getRequest = function () {
        requestNumber = prompt(`Угадай число от ${startRange} до ${endRange}`);
        if (requestNumber != null && !isNumber(requestNumber)) {
          console.log("Введи число!");
          getRequest();
        }
        return requestNumber != null ? getNumber(requestNumber) : null;
      };
      requestNumber = getRequest();

      leftRounds--;

      switch (true) {
        case requestNumber == null:
          needReplay = false;
          break;
        case requestNumber == secretNumber:
          needReplay = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
          break;
        case leftRounds == 0:
          needReplay = confirm("Попытки закончились, хотите сыграть еще?");
          break;
        case requestNumber > secretNumber:
          console.log(`Загаданное число меньше, осталось попыток: ${leftRounds}`);
          needReplay = gameRound(leftRounds);
          break;
        case requestNumber < secretNumber:
          console.log(`Загаданное число больше, осталось попыток: ${leftRounds}`);
          needReplay = gameRound(leftRounds);
          break;
      }
      return needReplay;
    };

    const gameResult = gameRound(leftRounds);
    if (gameResult) {
      startGame(leftRounds);
    }
    return gameResult;
  };

  startGame(countRounds);
  console.log("Игра окончена.");
  console.log("Вы молодец! Ждем вас снова.");
};

game();
