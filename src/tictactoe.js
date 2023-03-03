// @ts-check
/* eslint-disable class-methods-use-this */
/* eslint-disable default-case */

import Easy from './strategies/easy.js';
import Normal from './strategies/normal.js';

class TicTacToe {
  // BEGIN (write your solution here)
  constructor(gameType = 'easy') {
    switch (gameType) {
      case 'easy':
        this.gameStrategy = new Easy();
        break;
      case 'normal':
        this.gameStrategy = new Normal();
        break;
      default:
        throw new Error(`Unknown game type: ${gameType}`);
    }
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.player = 'play';
    this.computer = 'comp';
  }

  getPoint(x, y) {
    return this.field[y][x];
  }

  areYouWinner(x, y, player) {
    const rows = [
      [this.getPoint(0, y), this.getPoint(1, y), this.getPoint(2, y)],
      [this.getPoint(x, 0), this.getPoint(x, 1), this.getPoint(x, 2)],
      [this.getPoint(0, 0), this.getPoint(1, 1), this.getPoint(2, 2)],
      [this.getPoint(2, 0), this.getPoint(1, 1), this.getPoint(0, 2)],
    ];

    return rows.some((row) => row.every((cell) => cell === player));
  }

  setPoint(x, y, player) {
    if (this.getPoint(x, y) === null) {
      this.field[y][x] = player;
    } else {
      throw new Error(`Field ${x},${y} is already occupied`);
    }
  }

  go(x, y) {
    let player;
    let goToX;
    let goToY;
    if (x !== undefined && y !== undefined) {
      player = 'user';
      goToX = x;
      goToY = y;
    } else {
      player = 'comp';
      ({ goToX, goToY } = this.gameStrategy.makeMove(this));
    }
    this.setPoint(goToX, goToY, player);
    console.log(
      this.field
        .map((row) => row.map((item) => (item === null ? '____' : item)).join(' '))
        .join('\n'),
    );
    console.log('computer move', this.areYouWinner(goToX, goToY, player) ? 'and win' : '', '\n');
    return this.areYouWinner(goToX, goToY, player);
  }
  // END
}

export default TicTacToe;
