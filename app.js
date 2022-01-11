
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
  let frogPos = 94

  // Variable for CSS class car 
  const carClass = 'car'

  // Variables for car speed 
  let carSpeed1 = 500
  let carSpeed2 = 750

  // Variables for car positions

  let car1Pos = 70

  let car2Pos = 74

  let car3Pos = 69

  let car4Pos = 63

  // Variable for CSS class lorry-front
  const lorryFrontClass = 'lorry-front'
  // Variable for CSS class lorry-back
  const lorryBackClass = 'lorry-back'

  // Variables for lorry positions  
  let lorry1FrontPos = 41
  let lorry1BackPos = 40

  let lorry2FrontPos = 46
  let lorry2BackPos = 45



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
    addFrog(frogPos)

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

  // Functions for adding lorryClassFront & lorryClassBack to new div
  function addLorryFront(pos) {
    cells[pos].classList.add(lorryFrontClass)
  }
  function addLorryBack(pos) {
    cells[pos].classList.add(lorryBackClass)
  }
  // Function for removing lorryClassFront & lorryClassBack from old div
  function removeLorryFront(pos) {
    cells[pos].classList.remove(lorryFrontClass)
  }
  function removeLorryBack(pos) {
    cells[pos].classList.remove(lorryBackClass)
  }

  // Function to handle car movement right
  function car1DirectionRight() {
    setInterval(() => {
      // Call function to check collision with each interval
      checkCarCollision()
      // Conditional to check if car is at edge. If it is, will reset car to its start point 
      if (car1Pos % width !== width - 1) {
        removeCar(car1Pos)
        car1Pos++
        addCar(car1Pos)
      } else {
        removeCar(car1Pos)
        car1Pos -= 9
        addCar(car1Pos)
      }
    }, carSpeed1);
  }

  function car2DirectionRight() {
    setInterval(() => {

      checkCarCollision()
      if (car2Pos % width !== width - 1) {
        removeCar(car2Pos)
        car2Pos++
        addCar(car2Pos)
      } else {
        removeCar(car2Pos)
        car2Pos -= 9
        addCar(car2Pos)
      }
    }, carSpeed1);
  }

  // Function to handle car movement left
  function car3DirectionLeft() {
    setInterval(() => {
      checkCarCollision()
      if (car3Pos % width !== (width - 9) - 1) {
        removeCar(car3Pos)
        car3Pos--
        addCar(car3Pos)
      } else {
        removeCar(car3Pos)
        car3Pos += 8
        addCar(car3Pos)
      }
    }, carSpeed2);
  }

  function car4DirectionLeft() {
    setInterval(() => {
      checkCarCollision()
      if (car4Pos % width !== (width - 9) - 1) {
        removeCar(car4Pos)
        car4Pos--
        addCar(car4Pos)
      } else {
        removeCar(car4Pos)
        car4Pos += 8
        addCar(car4Pos)
      }
    }, carSpeed2);
  }

  // Function to handle lorry front movement
  function lorry1FrontDirection() {
    setInterval(() => {
      checkCarCollision()
      if (lorry1FrontPos % width !== width - 1) {
        removeLorryFront(lorry1FrontPos)
        lorry1FrontPos++
        addLorryFront(lorry1FrontPos)
      } else {
        removeLorryFront(lorry1FrontPos)
        lorry1FrontPos -= 9
        addLorryFront(lorry1FrontPos)
      }
    }, carSpeed1);
  }

  function lorry2FrontDirection() {
    setInterval(() => {
      checkCarCollision()
      if (lorry2FrontPos % width !== width - 1) {
        removeLorryFront(lorry2FrontPos)
        lorry2FrontPos++
        addLorryFront(lorry2FrontPos)
      } else {
        removeLorryFront(lorry2FrontPos)
        lorry2FrontPos -= 9
        addLorryFront(lorry2FrontPos)
      }
    }, carSpeed1);
  }

  // Function to handle lorry back movement 
  function lorry1BackDirection() {
    setInterval(() => {
      checkCarCollision()
      if (lorry1BackPos % width !== width - 1) {
        removeLorryBack(lorry1BackPos)
        lorry1BackPos++
        addLorryBack(lorry1BackPos)

      } else {
        removeLorryBack(lorry1BackPos)
        lorry1BackPos -= 9
        addLorryBack(lorry1BackPos)

      }
    }, carSpeed1);
  }

  function lorry2BackDirection() {
    setInterval(() => {
      checkCarCollision()
      if (lorry2BackPos % width !== width - 1) {
        removeLorryBack(lorry2BackPos)
        lorry2BackPos++
        addLorryBack(lorry2BackPos)

      } else {
        removeLorryBack(lorry2BackPos)
        lorry2BackPos -= 9
        addLorryBack(lorry2BackPos)

      }
    }, carSpeed1);
  }

  // Function that checks for collision with the player(frog) and the car
  function checkCarCollision() {
    if (frogPos === car1Pos || frogPos === car2Pos || frogPos === car3Pos ||
      frogPos === car4Pos || frogPos === lorry1FrontPos || frogPos === lorry1BackPos ||
      frogPos === lorry2FrontPos || frogPos === lorry2BackPos) {
      alert('CRASH!!')
      removeFrog(frogPos)
      frogPos = 94
      addFrog(frogPos)

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
    removeFrog(frogPos)
    // Conditional to check which key is pressed and change frogPos in desired direction 
    if (key === right && frogPos % width !== width - 1) {
      frogPos++
    } else if (key === left && frogPos % width !== 0) {
      frogPos--
    } else if (key === up && frogPos >= width) {
      frogPos -= width
    } else if (key === down && frogPos + width <= cellCount - 1) {
      frogPos += width
    }
    // Call add frog postion to add frog class to new frogPos
    checkCarCollision()

    addFrog(frogPos)
  }

  // Event listener for keydown. Runs user input function
  document.addEventListener('keydown', handleUserInput)

  // Calling gridStart function. (This will be changed to be called inside start game function)
  createGrid(gridStart)

  car1DirectionRight()
  car2DirectionRight()
  car3DirectionLeft()
  car4DirectionLeft()

  lorry1FrontDirection()
  lorry1BackDirection()
  lorry2FrontDirection()
  lorry2BackDirection()



}

window.addEventListener('DOMContentLoaded', init)