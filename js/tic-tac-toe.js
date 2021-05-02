// TIC TAC TOE

const tic_tac_toe = {

  // ATTRIBUTES
  

  // FUNCTIONS
  init(container) {
  },

  make_play(position) {
    // Checking if game is over
    // If the cell has already a value

    // Get Current Symbol to draw in cell

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
  },

  restart() {

  },

  draw() {
  },
};