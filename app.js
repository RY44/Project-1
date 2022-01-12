
function init() {

  // * Variables 
  // querySelectors
  const grid = document.querySelector('.grid')
  const startBut = document.querySelector('#start')
  const livesDisplay = document.querySelector('#lives')

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

  // Variable for Player lives
  let lives = 5


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


  // Variables for CSS classes lorries
  const lorryFrontClass = 'lorry-front'
  const lorryBackClass = 'lorry-back'

  // Variables for lorry positions  
  let lorry1FrontPos = 41
  let lorry1BackPos = 40

  let lorry2FrontPos = 46
  let lorry2BackPos = 45


  // Variables for CSS classes logs
  const log1Class = 'log1'
  const log2Class = 'log2'
  const log3Class = 'log3'
  const log4Class = 'log4'
  const log5Class = 'log5'
  const log6Class = 'log6'
  const log7Class = 'log7'
  const log8Class = 'log8'

  // Variables for log positions
  let log1Pos = 22
  let log2Pos = 23
  let log3Pos = 26
  let log4Pos = 27
  let log5Pos = 12
  let log6Pos = 13
  let log7Pos = 16
  let log8Pos = 17

  // Varibales for CSS classes rivers
  const riverStillClass = 'river-still'
  const river1Class = 'river1'
  const river2Class = 'river2'
  const river3Class = 'river3'
  const river4Class = 'river4'
  const river5Class = 'river5'
  const river6Class = 'river6'

  const river7Class = 'river7'
  const river8Class = 'river8'
  const river9Class = 'river9'
  const river10Class = 'river10'
  const river11Class = 'river11'
  const river12Class = 'river12'

  // Variables for river positions 
  let river1Pos = 20
  let river2Pos = 21
  let river3Pos = 24
  let river4Pos = 25
  let river5Pos = 28
  let river6Pos = 29
  let river7Pos = 10
  let river8Pos = 11
  let river9Pos = 14
  let river10Pos = 15
  let river11Pos = 18
  let river12Pos = 19

  let riverStillPos1 = 0
  let riverStillPos2 = 1
  let riverStillPos3 = 3
  let riverStillPos4 = 4
  let riverStillPos5 = 5
  let riverStillPos6 = 6
  let riverStillPos7 = 8
  let riverStillPos8 = 9

  // Variables for river speed
  let riverSpeed1 = 730
  let riverSpeed2 = 500


  // Variables for CSS class lilypad
  let lilyPadClass = 'lily-pad'

  // Variable for lilypad positions 
  let lilyPad1Pos = 2
  let lilyPad2Pos = 7


  let leftLog = 1




  // Event listener for start game
  startBut.addEventListener('click', startGame)




  // * Functions 

  // Function for starting game
  function startGame() {

    // Event listener for user input
    document.addEventListener('keydown', handleUserInput)

    // Function for displaying lives
    function setLivesDisplay() {
      livesDisplay.innerHTML = lives
    }

    // Function for creating grid
    function createGrid() {
      for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div')
        // cell.innerText = i
        grid.appendChild(cell)
        cells.push(cell)
      }

      // Call add functions
      addCar(car1Pos)
      addCar(car2Pos)
      addCar(car3Pos)
      addCar(car4Pos)

      addLorryFront(lorry1FrontPos)
      addLorryFront(lorry2FrontPos)
      addLorryBack(lorry1BackPos)
      addLorryBack(lorry2BackPos)

      addFrog(frogPos)
      addLog1(log1Pos)
      addLog2(log2Pos)
      addLog3(log3Pos)
      addLog4(log4Pos)
      addLog5(log5Pos)
      addLog6(log6Pos)
      addLog7(log7Pos)
      addLog8(log8Pos)

      addStillRiver(riverStillPos1)
      addStillRiver(riverStillPos2)
      addStillRiver(riverStillPos3)
      addStillRiver(riverStillPos4)
      addStillRiver(riverStillPos5)
      addStillRiver(riverStillPos6)
      addStillRiver(riverStillPos7)
      addStillRiver(riverStillPos8)

      addRiver1(river1Pos)
      addRiver2(river2Pos)
      addRiver3(river3Pos)
      addRiver4(river4Pos)
      addRiver5(river5Pos)
      addRiver6(river6Pos)
      addRiver7(river7Pos)
      addRiver8(river8Pos)
      addRiver9(river9Pos)
      addRiver10(river10Pos)
      addRiver11(river11Pos)
      addRiver12(river12Pos)

      addLilyPad(lilyPad1Pos)
      addLilyPad(lilyPad2Pos)
    }





    // Functions for adding/removing CCS classes
    function addFrog(pos) {
      cells[pos].classList.add(frogClass)
    }

    function removeFrog(pos) {
      cells[pos].classList.remove(frogClass)
    }


    function addCar(pos) {
      cells[pos].classList.add(carClass)
    }

    function removeCar(pos) {
      cells[pos].classList.remove(carClass)
    }


    function addLorryFront(pos) {
      cells[pos].classList.add(lorryFrontClass)
    }
    function addLorryBack(pos) {
      cells[pos].classList.add(lorryBackClass)
    }
    function removeLorryFront(pos) {
      cells[pos].classList.remove(lorryFrontClass)
    }
    function removeLorryBack(pos) {
      cells[pos].classList.remove(lorryBackClass)
    }


    function addLog1(pos) {
      cells[pos].classList.add(log1Class)
    }
    function addLog2(pos) {
      cells[pos].classList.add(log2Class)
    }
    function addLog3(pos) {
      cells[pos].classList.add(log3Class)
    }
    function addLog4(pos) {
      cells[pos].classList.add(log4Class)
    }
    function addLog5(pos) {
      cells[pos].classList.add(log5Class)
    }
    function addLog6(pos) {
      cells[pos].classList.add(log6Class)
    }
    function addLog7(pos) {
      cells[pos].classList.add(log7Class)
    }
    function addLog8(pos) {
      cells[pos].classList.add(log8Class)
    }

    function removeLog1(pos) {
      cells[pos].classList.remove(log1Class)
    }
    function removeLog2(pos) {
      cells[pos].classList.remove(log2Class)
    }
    function removeLog3(pos) {
      cells[pos].classList.remove(log3Class)
    }
    function removeLog4(pos) {
      cells[pos].classList.remove(log4Class)
    }
    function removeLog5(pos) {
      cells[pos].classList.remove(log5Class)
    }
    function removeLog6(pos) {
      cells[pos].classList.remove(log6Class)
    }
    function removeLog7(pos) {
      cells[pos].classList.remove(log7Class)
    }
    function removeLog8(pos) {
      cells[pos].classList.remove(log8Class)
    }

    function addStillRiver(pos) {
      cells[pos].classList.add(riverStillClass)
    }
    function addRiver1(pos) {
      cells[pos].classList.add(river1Class)
    }
    function addRiver2(pos) {
      cells[pos].classList.add(river2Class)
    }
    function addRiver3(pos) {
      cells[pos].classList.add(river3Class)
    }
    function addRiver4(pos) {
      cells[pos].classList.add(river4Class)
    }
    function addRiver5(pos) {
      cells[pos].classList.add(river5Class)
    }
    function addRiver6(pos) {
      cells[pos].classList.add(river6Class)
    }
    function addRiver7(pos) {
      cells[pos].classList.add(river7Class)
    }
    function addRiver8(pos) {
      cells[pos].classList.add(river8Class)
    }
    function addRiver9(pos) {
      cells[pos].classList.add(river9Class)
    }
    function addRiver10(pos) {
      cells[pos].classList.add(river10Class)
    }
    function addRiver11(pos) {
      cells[pos].classList.add(river11Class)
    }
    function addRiver12(pos) {
      cells[pos].classList.add(river12Class)
    }

    function removeRiver1(pos) {
      cells[pos].classList.remove(river1Class)
    }
    function removeRiver2(pos) {
      cells[pos].classList.remove(river2Class)
    }
    function removeRiver3(pos) {
      cells[pos].classList.remove(river3Class)
    }
    function removeRiver4(pos) {
      cells[pos].classList.remove(river4Class)
    }
    function removeRiver5(pos) {
      cells[pos].classList.remove(river5Class)
    }
    function removeRiver6(pos) {
      cells[pos].classList.remove(river6Class)
    }
    function removeRiver7(pos) {
      cells[pos].classList.remove(river7Class)
    }
    function removeRiver8(pos) {
      cells[pos].classList.remove(river8Class)
    }
    function removeRiver9(pos) {
      cells[pos].classList.remove(river9Class)
    }
    function removeRiver10(pos) {
      cells[pos].classList.remove(river10Class)
    }
    function removeRiver11(pos) {
      cells[pos].classList.remove(river11Class)
    }
    function removeRiver12(pos) {
      cells[pos].classList.remove(river12Class)
    }

    function addLilyPad(pos) {
      cells[pos].classList.add(lilyPadClass)
    }





    // Functions to handle car movement right
    function car1DirectionRight() {
      setInterval(() => {
        // Call function to check collision with each interval
        checkCollision()
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

        checkCollision()
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

    // Functions to handle car movement left
    function car3DirectionLeft() {
      setInterval(() => {
        checkCollision()
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
        checkCollision()
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

    // Functions to handle lorry front movement
    function lorry1FrontDirection() {
      setInterval(() => {
        checkCollision()
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
        checkCollision()
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

    // Functions to handle lorry back movement 
    function lorry1BackDirection() {
      setInterval(() => {
        checkCollision()
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
        checkCollision()
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


    // Functions to handle movement of log
    function log1Move() {
      setInterval(() => {
        if (log1Pos % width !== width - 1) {
          if (frogPos === log1Pos) {
            removeLog1(log1Pos)
            removeFrog(frogPos)
            log1Pos++
            frogPos++
            addLog1(log1Pos)
            addFrog(frogPos)
            addLog1(log1Pos)
          } else {
            removeLog1(log1Pos)
            log1Pos++
            addLog1(log1Pos)
          }
        } else {
          removeLog1(log1Pos)
          log1Pos -= 9
          addLog1(log1Pos)
        }
      }, riverSpeed1);
    }

    function log2Move() {
      setInterval(() => {
        if (log2Pos % width !== width - 1) {
          if (frogPos === log2Pos) {
            removeLog2(log2Pos)
            removeFrog(frogPos)
            log2Pos++
            frogPos++
            addFrog(frogPos)
            addLog2(log2Pos)
          } else {
            removeLog2(log2Pos)
            log2Pos++
            addLog2(log2Pos)
          }
        } else {
          removeLog2(log2Pos)
          log2Pos -= 9
          addLog2(log2Pos)
        }
      }, riverSpeed1);
    }

    function log3Move() {
      setInterval(() => {
        if (log3Pos % width !== width - 1) {
          if (frogPos) {
            removeLog3(log3Pos)
            removeFrog(frogPos)
            log3Pos++
            frogPos++
            addFrog(frogPos)
            addLog3(log3Pos)
          } else {
            removeLog3(log3Pos)
            log3Pos++
            addLog3(log3Pos)
          }
        } else {
          removeLog3(log3Pos)
          log3Pos -= 9
          addLog3(log3Pos)
        }
      }, riverSpeed1);
    }

    function log4Move() {
      setInterval(() => {
        if (log4Pos % width !== width - 1) {
          if (frogPos ===) {
            removeLog4(log4Pos)
            removeFrog(frogPos)
            log4Pos++
            frogPos++
            addFrog(frogPos)
            addLog4(log4Pos)
          } else {
            removeLog4(log4Pos)
            log4Pos++
            addLog4(log4Pos)
          }
        } else {
          removeLog4(log4Pos)
          log4Pos -= 9
          addLog4(log4Pos)
        }
      }, riverSpeed1);
    }

    function log5Move() {
      setInterval(() => {
        if (log5Pos % width !== width - 1) {
          if (frogPos === log5Pos) {
            removeLog5(log5Pos)
            removeFrog(frogPos)
            log5Pos++
            frogPos++
            addFrog(frogPos)
            addLog5(log5Pos)
          } else {
            removeLog5(log5Pos)
            log5Pos++
            addLog5(log5Pos)
          }
        } else {
          removeLog5(log5Pos)
          log5Pos -= 9
          addLog5(log5Pos)
        }
      }, riverSpeed2);
    }

    function log6Move() {
      setInterval(() => {
        if (log6Pos % width !== width - 1) {
          if (frogPos ===) {
            removeLog6(log6Pos)
            removeFrog(frogPos)
            log6Pos++
            frogPos++
            addFrog(frogPos)
            addLog6(log6Pos)
          } else {
            removeLog6(log6Pos)
            log6Pos++
            addLog6(log6Pos)
          }
        } else {
          removeLog6(log6Pos)
          log6Pos -= 9
          addLog6(log6Pos)
        }
      }, riverSpeed2);
    }

    function log7Move() {
      setInterval(() => {
        if (log7Pos % width !== width - 1) {
          if (frogPos === log7Pos) {
            removeLog7(log7Pos)
            removeFrog(frogPos)
            log7Pos++
            frogPos++
            addFrog(frogPos)
            addLog7(log7Pos)
          } else {
            removeLog7(log7Pos)
            log7Pos++
            addLog7(log7Pos)
          }
        } else {
          removeLog7(log7Pos)
          log7Pos -= 9
          addLog7(log7Pos)
        }
      }, riverSpeed2);
    }

    function log8Move() {
      setInterval(() => {
        if (log8Pos % width !== width - 1) {
          if (frogPos === log8Pos) {
            removeLog8(log8Pos)
            removeFrog(frogPos)
            log8Pos++
            frogPos++
            addFrog(frogPos)
            addLog8(log8Pos)
          } else {
            removeLog8(log8Pos)
            log8Pos++
            addLog8(log8Pos)
          }
        } else {
          removeLog8(log8Pos)
          log8Pos -= 9
          addLog8(log8Pos)
        }
      }, riverSpeed2);
    }


    // Functions for movement of river
    function river1Move() {
      setInterval(() => {
        if (river1Pos % width !== width - 1) {
          removeRiver1(river1Pos)
          river1Pos++
          addRiver1(river1Pos)
        } else {
          removeRiver1(river1Pos)
          river1Pos -= 9
          addRiver1(river1Pos)
        }
      }, riverSpeed1);
    }

    function river2Move() {
      setInterval(() => {
        if (river2Pos % width !== width - 1) {
          removeRiver2(river2Pos)
          river2Pos++
          addRiver2(river2Pos)
        } else {
          removeRiver2(river2Pos)
          river2Pos -= 9
          addRiver2(river2Pos)
        }
      }, riverSpeed1);
    }

    function river3Move() {
      setInterval(() => {
        if (river3Pos % width !== width - 1) {
          removeRiver3(river3Pos)
          river3Pos++
          addRiver3(river3Pos)
        } else {
          removeRiver3(river3Pos)
          river3Pos -= 9
          addRiver3(river3Pos)
        }
      }, riverSpeed1);
    }

    function river4Move() {
      setInterval(() => {
        if (river4Pos % width !== width - 1) {
          removeRiver4(river4Pos)
          river4Pos++
          addRiver4(river4Pos)
        } else {
          removeRiver4(river4Pos)
          river4Pos -= 9
          addRiver4(river4Pos)
        }
      }, riverSpeed1);
    }

    function river5Move() {
      setInterval(() => {
        if (river5Pos % width !== width - 1) {
          removeRiver5(river5Pos)
          river5Pos++
          addRiver5(river5Pos)
        } else {
          removeRiver5(river5Pos)
          river5Pos -= 9
          addRiver5(river5Pos)
        }
      }, riverSpeed1);
    }

    function river6Move() {
      setInterval(() => {
        if (river6Pos % width !== width - 1) {
          removeRiver6(river6Pos)
          river6Pos++
          addRiver6(river6Pos)
        } else {
          removeRiver6(river6Pos)
          river6Pos -= 9
          addRiver6(river6Pos)
        }
      }, riverSpeed1);
    }


    function river7Move() {
      setInterval(() => {
        if (river7Pos % width !== width - 1) {
          removeRiver7(river7Pos)
          river7Pos++
          addRiver7(river7Pos)
        } else {
          removeRiver7(river7Pos)
          river7Pos -= 9
          addRiver7(river7Pos)
        }
      }, riverSpeed2);
    }

    function river8Move() {
      setInterval(() => {
        if (river8Pos % width !== width - 1) {
          removeRiver8(river8Pos)
          river8Pos++
          addRiver8(river8Pos)
        } else {
          removeRiver8(river8Pos)
          river8Pos -= 9
          addRiver8(river8Pos)
        }
      }, riverSpeed2);
    }

    function river9Move() {
      setInterval(() => {
        if (river9Pos % width !== width - 1) {
          removeRiver9(river9Pos)
          river9Pos++
          addRiver9(river9Pos)
        } else {
          removeRiver9(river9Pos)
          river9Pos -= 9
          addRiver9(river9Pos)
        }
      }, riverSpeed2);
    }

    function river10Move() {
      setInterval(() => {
        if (river10Pos % width !== width - 1) {
          removeRiver10(river10Pos)
          river10Pos++
          addRiver10(river10Pos)
        } else {
          removeRiver10(river10Pos)
          river10Pos -= 9
          addRiver10(river10Pos)
        }
      }, riverSpeed2);
    }

    function river11Move() {
      setInterval(() => {
        if (river11Pos % width !== width - 1) {
          removeRiver11(river11Pos)
          river11Pos++
          addRiver11(river11Pos)
        } else {
          removeRiver11(river11Pos)
          river11Pos -= 9
          addRiver11(river11Pos)
        }
      }, riverSpeed2);
    }

    function river12Move() {
      setInterval(() => {
        if (river12Pos % width !== width - 1) {
          removeRiver12(river12Pos)
          river12Pos++
          addRiver12(river12Pos)
        } else {
          removeRiver12(river12Pos)
          river12Pos -= 9
          addRiver12(river12Pos)
        }
      }, riverSpeed2);
    }


    // Function that checks for collisions
    function checkCollision() {
      if (frogPos === car1Pos || frogPos === car2Pos || frogPos === car3Pos ||
        frogPos === car4Pos || frogPos === lorry1FrontPos || frogPos === lorry1BackPos ||
        frogPos === lorry2FrontPos || frogPos === lorry2BackPos ||
        frogPos === river1Pos || frogPos === river2Pos || frogPos === river3Pos ||
        frogPos === river4Pos || frogPos === river5Pos || frogPos === river6Pos ||
        frogPos === river7Pos || frogPos === river8Pos || frogPos === river9Pos ||
        frogPos === river10Pos || frogPos === river11Pos || frogPos === river12Pos ||
        frogPos === riverStillPos1 || frogPos === riverStillPos2 || frogPos === riverStillPos3 ||
        frogPos === riverStillPos4 || frogPos === riverStillPos5 || frogPos === riverStillPos6 ||
        frogPos === riverStillPos7 || frogPos === riverStillPos8) {
        // alert('CRASH!!')
        removeFrog(frogPos)
        frogPos = 94
        lives--
        addFrog(frogPos)
        setLivesDisplay()
        console.log('Lives left are', lives)
      } else if (frogPos === lilyPad1Pos || frogPos === lilyPad2Pos) {
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
      checkCollision()

      addFrog(frogPos)
      goLeftLog = false
    }



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



    log1Move()
    log2Move()
    log3Move()
    log4Move()
    log5Move()
    log6Move()
    log7Move()
    log8Move()

    river1Move()
    river2Move()
    river3Move()
    river4Move()
    river5Move()
    river6Move()

    river7Move()
    river8Move()
    river9Move()
    river10Move()
    river11Move()
    river12Move()






  }
}

window.addEventListener('DOMContentLoaded', init)