
function init() {

  // * Variables 
  // Variable for grid 
  const grid = document.querySelector('.grid')

  // Variable for width of grid
  const width = 10
  // Variable for Amount on grid
  const cellCount = width * width
  // Variable for start position of grid
  const gridStart = 0
  // Array for storing grid 
  const cells = []

  // Variable for CSS class frog
  const frogClass = 'frog'
  // Variable for current position of frog
  let frogCurrentPosition = 94

  // Variable for CSS class car 
  const carClass = 'car'
  // Variable for start position of car
  const carStart1Position = 70
  // Variable for current position of car 
  let carCurrent1Position = 70
  // Variables for car speed 
  let carSpeed1 = 500
  let carSpeed2 = 750

  const carStart2Position = 74
  let carCurrent2Position = 74

  const carStart3Position = 69
  let carCurrent3Position = 69

  const carStart4Position = 63
  let carCurrent4Position = 63


  // * Functions 
  // Function for creating grid
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    // Call addFrog function
    addFrog(frogCurrentPosition)
    addCar(carStart1Position)
    addCar(carStart2Position)
  }

  // Function for adding frogClass to new div
  function addFrog(pos) {
    cells[pos].classList.add(frogClass)
  }

  // Function for removing frogClass from old div 
  function removeFrog(pos) {
    cells[pos].classList.remove(frogClass)
  }

  // Function for adding carClass to new div
  function addCar(pos) {
    cells[pos].classList.add(carClass)
  }

  // Function for removing carClass from old div
  function removeCar(pos) {
    cells[pos].classList.remove(carClass)
  }

  // Function to handle car movement right
  function carDirectionRight(car) {
    setInterval(() => {
      // Call function to check collision with each interval
      checkCarCollision(car)
      // Conditional to check if car is at edge. If it is, will reset car to its start point 
      if (car % width !== width - 1) {
        removeCar(car)
        car++
        addCar(car)
      } else if (car % width === width - 1) {
        removeCar(car)
        car -= 9
        addCar(car)
      }
    }, carSpeed1);
  }

  // Function to handle car movement left
  function carDirectionLeft(car) {
    setInterval(() => {
      // Call function to check collision with each interval
      checkCarCollision(car)
      // Conditional to check if car is at edge. If it is, will reset car to its start point 
      if (car % width !== width - 9) {
        removeCar(car)
        car--
        addCar(car)
      } else if (car % width === width - 9) {
        removeCar(car)
        car += 9
        addCar(car)
      }
    }, carSpeed2);
  }

  // Function that checks for collision with the player(frog) and the car
  function checkCarCollision(car) {
    if (car === frogCurrentPosition) {
      removeFrog(frogCurrentPosition)
      frogCurrentPosition = 94
      addFrog(frogCurrentPosition)
    }
  }

  // Function for handling user inputs using key codes
  function handleUserInput(e) {
    const key = e.keyCode
    const left = 37
    const right = 39
    const up = 38
    const down = 40
    // Call funtion to remove frog from it's current postion
    removeFrog(frogCurrentPosition)
    // Conditional to check which key is pressed and change frogCurrentPosition in desired direction 
    if (key === right && frogCurrentPosition % width !== width - 1) {
      frogCurrentPosition++
    } else if (key === left && frogCurrentPosition % width !== 0) {
      frogCurrentPosition--
    } else if (key === up && frogCurrentPosition >= width) {
      frogCurrentPosition -= width
    } else if (key === down && frogCurrentPosition + width <= cellCount - 1) {
      frogCurrentPosition += width
    } else if (frogCurrentPosition === carCurrentPosition) {
      console.log('Game Over!')
    }
    // Call add frog postion to add frog class to new frogCurrentPosition 
    addFrog(frogCurrentPosition)
  }

  // Event listener for keydown. Runs user input function
  document.addEventListener('keydown', handleUserInput)

  // Calling gridStart function. (This will be changed to be called inside start game function)
  createGrid(gridStart)
  carDirectionRight(carCurrent1Position)
  carDirectionRight(carCurrent2Position)
  carDirectionLeft(carCurrent3Position)
  carDirectionLeft(carCurrent4Position)

}

window.addEventListener('DOMContentLoaded', init)