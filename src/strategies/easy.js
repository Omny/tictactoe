// @ts-check
/* eslint-disable class-methods-use-this */

class Easy {
  // BEGIN (write your solution here)
  makeMove(game) {
    for (let y = 0; y <= 2; y += 1) {
      for (let x = 0; x <= 2; x += 1) {
        if (game.getPoint(x, y) === null) {
          return {
            computerX: x,
            computerY: y,
          };
        }
      }
    }
    throw new Error('makeMove Easy cant move');
  }
  // END
}

export default Easy;
