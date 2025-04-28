const board = document.querySelector('.board')
const message = document.getElementById('message')
let currentPlayer = 'red'

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
    {
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
          } else {
            message.innerText = ' Congratulations Player Yellow Wins'
            message.style.color = 'yellow'
          }
        }
      }
    }
  }
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', () => {
    console.log(' clicked cell index:', i)
    const column = i % 7
    const columnIndexes = columnPatterns[column]

    for (let j = 0; j < columnIndexes.length; j++) {
      const index = columnIndexes[j]

      if (cells[index].style.backgroundColor === '') {
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
