// @ts-check
/* eslint-disable class-methods-use-this */

class Normal {
  // BEGIN (write your solution here)
  makeMove(game) {
    for (let x = 2; x >= 0; x -= 1) {
      for (let y = 0; y <= 2; y += 1) {
        if (game.getPoint(x, y) === null) {
          return {
            computerX: x,
            computerY: y,
          };
        }
      }
    }
    throw new Error('makeMove Normal cant move');
  }
  // END
}

export default Normal;
