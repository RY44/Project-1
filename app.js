
function init() {

  // * Variables
  const grid = document.querySelector('.grid')

  const width = 10
  const cellCount = width * width
  const cells = []

  const frogClass = 'frog'
  const frogStartPosition = 0
  let frogCurrentPosition = 0



  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addFrog(frogStartPosition)
  }


  function addFrog(position) {

    cells[position].classList.add(frogClass)
  }


  function removeFrog(position) {
    cells[position].classList.remove(frogClass)
  }



  function handleKeyDown(event) {
    const key = event.keyCode
    const left = 37
    const right = 39
    const up = 38
    const down = 40
    removeFrog(frogCurrentPosition)

    if (key === right && frogCurrentPosition % width !== width - 1) {
      frogCurrentPosition++
    } else if (key === left && frogCurrentPosition % width !== 0) {
      frogCurrentPosition--
    } else if (key === up && frogCurrentPosition >= width) {
      frogCurrentPosition -= width
    } else if (key === down && frogCurrentPosition + width <= cellCount - 1) {
      frogCurrentPosition += width
    } else {
      console.log('INVALID KEY')
    }
    console.log('POSITION AFTER REDEFINING --->', frogCurrentPosition)
    addFrog(frogCurrentPosition)
  }

  // * Event listeners
  document.addEventListener('keydown', handleKeyDown)

  createGrid(frogStartPosition)

}

window.addEventListener('DOMContentLoaded', init)