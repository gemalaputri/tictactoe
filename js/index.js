$(document).ready(function(){
  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]
  let player = 'X';
  let varo_win = 0;
  let varx_win = 0;
  let isGameOver = false;

  function handleRestartGame() {
    for (var row = 0; row < 3; row++) {
      for (var column = 0; column < 3; column++) {
        grid[row][column] = ' ';
        $('.cols[data-row='+ row +'][data-column='+ column +']').html(' ');
      }
    }

    player = 'X';
    isGameOver = false;
  }

  function handleChangePlayer() {
    if(player === 'X') {
      player = 'O';
    } else {
      player = 'X';
    }
  }

  function handleCheckGameOver() {
    // check horizontal
    for (var row = 0; row < 3; row++) {
      if(grid[row][0] !== ' ' &&
      grid[row][0] === grid[row][1] &&
      grid[row][0] === grid[row][2]) {
        return grid[row][0];
      }
    }

    // check vertical
    for (var column = 0; column < 3; column++) {
      if(grid[0][column] !== ' ' &&
      grid[0][column] === grid[1][column] &&
      grid[0][column] === grid[2][column]) {
        return grid[0][column];
      }
    }

    // check diagonal top left to bottom right
    if(grid[0][0] !== ' ' &&
    grid[0][0] === grid[1][1] &&
    grid[0][0] === grid[2][2]) {
      return grid[0][0];
    }

    // check diagonal top right to bottom left
    if(grid[0][2] !== ' ' &&
    grid[0][2] === grid[1][1] &&
    grid[0][2] === grid[2][0]) {
      return grid[0][2];
    }

    for (var row = 0; row < 3; row++) {
      for (var column = 0; column < 3; column++) {
        if(grid[row][column] === ' ') {
          return false;
        }
      }
    }

    return alert("tie!");

  }

  $('.cols').click(function(){
    $this = $(this);
    const row = $this.data('row');
    const column = $this.data('column');
    if(grid[row][column] === ' ' &&  isGameOver === false){
      $(this).html(player);
      grid[row][column] = player;
    }

    if(handleCheckGameOver()) {
      isGameOver = true;

      if(isGameOver){
        if (player === 'X') {
          varx_win += 1;
          $('#varx').html(varx_win);
          alert("X wins");
        } else if (player === 'O') {
          varo_win += 1;
          $('#varo').html(varo_win);
          alert("O wins");
        }
        player = '+';
      }
    } else {
      handleChangePlayer();
    }

  });

  $('#restart').click(function() {
    handleRestartGame();
  })


})
