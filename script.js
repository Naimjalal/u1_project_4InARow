const board = document.querySelector('.board')

for (let i = 1; i < 42; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  board.appendChild(cell)
}

let currentPlayer = 'red'
const cells = document.querySelectorAll('.cell')
const message = document.getElementById('message')

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', () => {
    // console.log(' clicked cell index:', i)
    if (cells[i].style.backgroundColor === '') {
      if (currentPlayer === 'red') {
        cells[i].style.backgroundColor = 'red'
        currentPlayer = 'yellow'
        message.innerText = "Player Yellow's turn"
      } else {
        cells[i].style.backgroundColor = 'yellow'
        currentPlayer = 'red'
        message.innerText = "Player Red's turn"
      }
    }
  })
}
