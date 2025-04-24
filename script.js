// console.log('Welcome')
let player = 'x'
const board = document.querySelector('.board')

for (let i = 1; i < 42; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  board.appendChild(cell)
}

const cells = document.querySelectorAll('.cell')

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', () => {
    if (cells[i].innerText === '') {
      cells[i].style.backgroundColor = 'red'
    }
  })
}
