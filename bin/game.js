#!/usr/bin/env node

import TicTacToe from '../index.js';

// example of game
const game = new TicTacToe();
game.go(1, 1);
game.go();
game.go(0, 1);
game.go();
game.go(2, 1);
