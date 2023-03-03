# tictactoe

[![Node CI](https://github.com/Omny/tictactoe/actions/workflows/nodejs.yml/badge.svg)](https://github.com/Omny/tictactoe/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/ac4b1de45db4b5173baa/maintainability)](https://codeclimate.com/github/Omny/tictactoe/maintainability)

## TicTacToe - Node JS Game
TicTacToe is a well-known game of tic-tac-toe, on a 3x3 field. The main game engine is in the file tictactoe.js. In the strategies directory is the code that is responsible for the behavior of the AI (Artificial Intelligence!). Depending on the chosen level of the game, either Easy strategy or Normal is enabled. The game moves are prescribed in game.js.

The Easy strategy tries to fill the fields, going line by line from left to right and from top to bottom (starting from the top left corner).

The Normal strategy tries to fill the fields by going from left to right and from bottom to top (starting from the bottom left corner).

## Setup

```bash
make install
```

## Run

```bash
make run
```

## Run tests

```bash
make test
```
## 
