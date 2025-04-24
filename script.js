// console.log('Welcome')
const board = document.querySelector('.board')
for (let i = 1; i < 42; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  board.appendChild(cell)
}
