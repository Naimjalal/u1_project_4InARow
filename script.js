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
          message.style.color = 'Red'
          gameOver = true
          return
        } else {
          message.innerText = ' Congratulations Player Yellow Wins'
          message.style.color = 'yellow'
          gameOver = true
          return
        }
      }
    }
  }
  const verticalPatterns = [
    [35, 36, 37, 38, 39, 40, 41],
    [28, 29, 30, 31, 32, 33, 34],
    [21, 22, 23, 24, 25, 26, 27],
    [14, 15, 16, 17, 18, 19, 20],
    [7, 8, 9, 10, 11, 12, 13],
    [0, 1, 2, 3, 4, 5, 6]
  ]
  for (let i = 0; i < verticalPatterns.length; i++) {
    const column = verticalPatterns[i]
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
          message.style.color = 'Red'
          gameOver = true
          return
        } else {
          message.innerText = ' Congratulations Player Yellow Wins'
          message.style.color = 'yellow'
          gameOver = true
          return
        }
      }
    }
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
