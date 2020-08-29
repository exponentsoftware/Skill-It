// TIC TAC TOE

const tic_tac_toe = {

  // ATTRIBUTES
  board: ['', '', '', '', '', '', '', '', ''],
  symbols: {
    options: ['O', 'X'],
    turn_index: 0,
    change() {
      this.turn_index = (this.turn_index === 0 ? 1 : 0);
    }
  },
  container_element: null,
  gameover: false,
  winner_sequences: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],

  // FUNCTIONS
  init(container) {
    this.container_element = container;
  },

  make_play(position) {
    // Checking if game is over
    // If the cell has already a value
    if (this.gameover || this.board[position] !== '') return false;

    // Get Current Symbol to draw in cell
    const currentSymbol = this.symbols.options[this.symbols.turn_index];
    this.board[position] = currentSymbol;

    this.draw();

    const winning_sequence_index = this.check_winning_sequences(currentSymbol);
    if (this.is_game_over()) {
      this.game_is_over();
    }

    if (winning_sequence_index >= 0) {
      this.game_is_over();
      this.stylize_winner_sequence(this.winner_sequences[winning_sequence_index]);
    } else {
      this.symbols.change();
    }

    return true;
  },

  stylize_winner_sequence(winner_sequence, currentSymbol) {
    winner_sequence.forEach(position => {
      this.container_element
        .querySelector(`div:nth-child(${position + 1})`)
        .classList.add('winner');
    });

  },

  check_winning_sequences(symbol) {

    for (i in this.winner_sequences) {
      if (this.board[this.winner_sequences[i][0]] === symbol &&
        this.board[this.winner_sequences[i][1]] === symbol &&
        this.board[this.winner_sequences[i][2]] === symbol) {
        console.log('Winning sequences  index: ' + i);
        return i;
      }
    };
    return -1;
  },

  game_is_over() {
    this.gameover = true;
    console.log('Game Over');
  },

  is_game_over() {
    return !this.board.includes('');
  },

  start() {
    this.board.fill('');
    this.draw();
    this.gameover = false;
  },

  restart() {
    if (this.is_game_over() || this.gameover) {
      this.start();
      console.log('Game has been restarted!');
    } else if (confirm('Are you sure you want to restart?')) {
      this.start();
      console.log('Game has been restarted');
    }

  },

  draw() {
    this.container_element.innerHTML = this.board.map((element, index) => `<div onclick="tic_tac_toe.make_play('${index}')"> ${element}</div>`).reduce((content, current) => content + current);
  },
};