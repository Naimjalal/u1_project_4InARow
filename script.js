const board = document.querySelector('.board')
const message = document.getElementById('message')
const resetButton = document.getElementById('resetButton')
let currentPlayer = 'red'
let gameOver = false

for (let i = 1; i < 42; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  board.appendChild(cell)
}

const cells = document.querySelectorAll('.cell')

const columnPatterns = [
  [35, 28, 21, 14, 7, 0],
  [36, 29, 22, 15, 8, 1],
  [37, 30, 23, 16, 9, 2],
  [38, 31, 24, 17, 10, 3],
  [39, 32, 25, 18, 11, 4],
  [40, 33, 26, 19, 12, 5],
  [41, 34, 27, 20, 13, 6]
]

const checkWinner = () => {
  for (let i = 0; i < columnPatterns.length; i++) {
    const column = columnPatterns[i]
    for (let j = 0; j < column.length - 3; j++) {
      const a = column[j]
      const b = column[j + 1]
      const c = column[j + 2]
      const d = column[j + 3]

      if (
        cells[a].style.backgroundColor !== '' &&
        cells[a].style.backgroundColor === cells[b].style.backgroundColor &&
        cells[a].style.backgroundColor === cells[c].style.backgroundColor &&
        cells[a].style.backgroundColor === cells[d].style.backgroundColor
      ) {
        if (cells[a].style.backgroundColor === 'red') {
          message.innerText = 'Congratulations Player Red Wins'
          message.style.color = 'blue'
          gameOver = true
          return
        } else {
          message.innerText = ' Congratulations Player Yellow Wins'
          message.style.color = 'blue'
          gameOver = true
          return
        }
      }
    }
  }
  const horizontalPatterns = [
    [35, 36, 37, 38, 39, 40, 41],
    [28, 29, 30, 31, 32, 33, 34],
    [21, 22, 23, 24, 25, 26, 27],
    [14, 15, 16, 17, 18, 19, 20],
    [7, 8, 9, 10, 11, 12, 13],
    [0, 1, 2, 3, 4, 5, 6]
  ]
  for (let i = 0; i < horizontalPatterns.length; i++) {
    const column = horizontalPatterns[i]
    for (let j = 0; j < column.length - 3; j++) {
      const a = column[j]
      const b = column[j + 1]
      const c = column[j + 2]
      const d = column[j + 3]

      if (
        cells[a].style.backgroundColor !== '' &&
        cells[a].style.backgroundColor === cells[b].style.backgroundColor &&
        cells[a].style.backgroundColor === cells[c].style.backgroundColor &&
        cells[a].style.backgroundColor === cells[d].style.backgroundColor
      ) {
        if (cells[a].style.backgroundColor === 'red') {
          message.innerText = 'Congratulations Player Red Wins'
          message.style.color = 'blue'
          gameOver = true
          return
        } else {
          message.innerText = ' Congratulations Player Yellow Wins'
          message.style.color = 'blue'
          gameOver = true
          return
        }
      }
    }
  }
  const diagonalPatterns = [
    [0, 8, 16, 24],
    [1, 9, 17, 25],
    [2, 10, 18, 26],
    [3, 11, 19, 27],
    [7, 15, 23, 31],
    [8, 16, 24, 32],
    [9, 17, 25, 33],
    [10, 18, 26, 34],
    [14, 22, 30, 38],
    [15, 23, 31, 39],
    [16, 24, 32, 40],
    [17, 25, 33, 41]
  ]
  for (let i = 0; i < diagonalPatterns.length; i++) {
    const [a, b, c, d] = diagonalPatterns[i]
    if (
      cells[a].style.backgroundColor !== '' &&
      cells[a].style.backgroundColor === cells[b].style.backgroundColor &&
      cells[a].style.backgroundColor === cells[c].style.backgroundColor &&
      cells[a].style.backgroundColor === cells[d].style.backgroundColor
    ) {
      if (cells[a].style.backgroundColor === 'red') {
        message.innerText = 'Congratulations Player Red Wins'
        message.style.color = 'blue'
        gameOver = true
        return
      } else {
        message.innerText = ' Congratulations Player Yellow Wins'
        message.style.color = 'blue'
        gameOver = true
        return
      }
    }
  }
  const diagonalOppositePatterns = [
    [3, 9, 15, 21],
    [4, 10, 16, 22],
    [5, 11, 17, 23],
    [6, 12, 18, 24],
    [10, 16, 22, 28],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [13, 19, 25, 31],
    [17, 23, 29, 35],
    [18, 24, 30, 36],
    [19, 25, 31, 37],
    [20, 26, 32, 39]
  ]
  for (let i = 0; i < diagonalOppositePatterns.length; i++) {
    const [a, b, c, d] = diagonalOppositePatterns[i]
    if (
      cells[a].style.backgroundColor !== '' &&
      cells[a].style.backgroundColor === cells[b].style.backgroundColor &&
      cells[a].style.backgroundColor === cells[c].style.backgroundColor &&
      cells[a].style.backgroundColor === cells[d].style.backgroundColor
    ) {
      if (cells[a].style.backgroundColor === 'red') {
        message.innerText = 'Congratulations Player Red Wins'
        message.style.color = 'Blue'
        gameOver = true
        return
      } else {
        message.innerText = ' Congratulations Player Yellow Wins'
        message.style.color = 'Blue'
        gameOver = true
        return
      }
    }
  }
  let boardFull = true
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].style.backgroundColor === '') {
      boardFull = false
      break
    }
  }
  if (boardFull && !gameOver) {
    message.innerText = 'Its a tie'
    message.style.color = 'red'
    gameOver = true
  }
}

const resetGame = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = ''
  }
  currentPlayer = 'red'
  gameOver = false
  message.innerText = "Player Red's turn"
  message.style.color = 'red'
}
//Event listener
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', () => {
    console.log(' clicked cell index:', i)
    const column = i % 7
    const columnIndexes = columnPatterns[column]

    for (let j = 0; j < columnIndexes.length; j++) {
      const index = columnIndexes[j]

      if (cells[index].style.backgroundColor === '' && !gameOver) {
        if (currentPlayer === 'red') {
          cells[index].style.backgroundColor = 'red'
          currentPlayer = 'yellow'
          message.innerText = "Player Yellow's turn"
          message.style.color = 'yellow'
        } else {
          cells[index].style.backgroundColor = 'yellow'
          currentPlayer = 'red'
          message.innerText = "Player Red's turn"
          message.style.color = 'red'
        }

        checkWinner()
        break
      }
    }
  })
}

resetButton.addEventListener('click', resetGame)
