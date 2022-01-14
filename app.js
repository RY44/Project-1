
function init() {

  // * Variables 
  // querySelectors
  const grid = document.querySelector('.grid')
  const startBut = document.querySelector('#start')
  const livesDisplay = document.querySelector('#lives')
  const scoreDisplay = document.querySelector('#score')

  // Variable for width of grid
  const width = 10
  // Variable for Amount on grid
  const cellCount = width * width
  // Variable for start position of grid
  const gridStart = 0
  // Array for storing grid 
  const cells = []


  // Variable for current position of frog
  let frogPos = 94

  // Variable for Player lives
  let lives = 3

  // Variable for score
  let score = 0



  // Variables for sound 
  let sndTrackpath = '../1min-2021-08-16_-_8_Bit_Adventure_-_www.FesliyanStudios.com.mp3'
  let gameOverPath = '../Retro-game-over-sound-effect.mp3'
  let crashPath = '../361259__japanyoshithegamer__8-bit-cymbal-kick-or-impact.wav'

  let sndTrack = new Audio(sndTrackpath)
  let sndGameOver = new Audio(gameOverPath)
  let sndCrash = new Audio(crashPath)



  // Variable for CSS classes
  const frogClass = 'frog'
  const carClass = 'car'
  const lorryFrontClass = 'lorry-front'
  const lorryBackClass = 'lorry-back'

  const log1Class = 'log1'
  const log2Class = 'log2'
  const log3Class = 'log3'
  const log4Class = 'log4'
  const log5Class = 'log5'
  const log6Class = 'log6'
  const log7Class = 'log7'
  const log8Class = 'log8'

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

  let lilyPadClass = 'lily-pad'

  let road = 'road'
  let grass = 'grass'


  // Variables for speeds
  let carSpeed1 = 750
  let carSpeed2 = 900
  let riverSpeed1 = 800
  let riverSpeed2 = 650


  // Variables for positions
  let car1Pos = 70
  let car2Pos = 74
  let car3Pos = 69
  let car4Pos = 63

  let lorry1FrontPos = 41
  let lorry1BackPos = 40

  let lorry2FrontPos = 46
  let lorry2BackPos = 45

  let log1Pos = 22
  let log2Pos = 23
  let log3Pos = 26
  let log4Pos = 27
  let log5Pos = 12
  let log6Pos = 13
  let log7Pos = 16
  let log8Pos = 17

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

  let lilyPad1Pos = 2
  let lilyPad2Pos = 7


  // Event listener for start game
  startBut.addEventListener('click', startGame)




  // * Functions 

  // Function for starting game
  function startGame() {
    startBut.disabled = true
    // Event listener for user input
    document.addEventListener('keydown', handleUserInput)

    // Sound Track
    sndTrack.play()
    sndTrack.loop = true

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

      addRoad()
      addGrass()
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

    function removeStillRiver(pos) {
      cells[pos].classList.remove(riverStillClass)
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

    function removeLilyPad(pos) {
      cells[pos].classList.remove(lilyPadClass)
    }


    function addRoad() {
      cells[40].classList.add(road)
      cells[41].classList.add(road)
      cells[42].classList.add(road)
      cells[43].classList.add(road)
      cells[44].classList.add(road)
      cells[45].classList.add(road)
      cells[46].classList.add(road)
      cells[47].classList.add(road)
      cells[48].classList.add(road)
      cells[49].classList.add(road)
      cells[60].classList.add(road)
      cells[61].classList.add(road)
      cells[62].classList.add(road)
      cells[63].classList.add(road)
      cells[64].classList.add(road)
      cells[65].classList.add(road)
      cells[66].classList.add(road)
      cells[67].classList.add(road)
      cells[68].classList.add(road)
      cells[69].classList.add(road)
      cells[70].classList.add(road)
      cells[71].classList.add(road)
      cells[72].classList.add(road)
      cells[73].classList.add(road)
      cells[74].classList.add(road)
      cells[75].classList.add(road)
      cells[76].classList.add(road)
      cells[77].classList.add(road)
      cells[78].classList.add(road)
      cells[79].classList.add(road)
    }

    function removeRoad() {
      cells[40].classList.remove(road)
      cells[41].classList.remove(road)
      cells[42].classList.remove(road)
      cells[43].classList.remove(road)
      cells[44].classList.remove(road)
      cells[45].classList.remove(road)
      cells[46].classList.remove(road)
      cells[47].classList.remove(road)
      cells[48].classList.remove(road)
      cells[49].classList.remove(road)
      cells[60].classList.remove(road)
      cells[61].classList.remove(road)
      cells[62].classList.remove(road)
      cells[63].classList.remove(road)
      cells[64].classList.remove(road)
      cells[65].classList.remove(road)
      cells[66].classList.remove(road)
      cells[67].classList.remove(road)
      cells[68].classList.remove(road)
      cells[69].classList.remove(road)
      cells[70].classList.remove(road)
      cells[71].classList.remove(road)
      cells[72].classList.remove(road)
      cells[73].classList.remove(road)
      cells[74].classList.remove(road)
      cells[75].classList.remove(road)
      cells[76].classList.remove(road)
      cells[77].classList.remove(road)
      cells[78].classList.remove(road)
      cells[79].classList.remove(road)
    }


    function addGrass() {
      cells[30].classList.add(grass)
      cells[31].classList.add(grass)
      cells[32].classList.add(grass)
      cells[33].classList.add(grass)
      cells[34].classList.add(grass)
      cells[35].classList.add(grass)
      cells[36].classList.add(grass)
      cells[37].classList.add(grass)
      cells[38].classList.add(grass)
      cells[39].classList.add(grass)
      cells[50].classList.add(grass)
      cells[51].classList.add(grass)
      cells[52].classList.add(grass)
      cells[53].classList.add(grass)
      cells[54].classList.add(grass)
      cells[55].classList.add(grass)
      cells[56].classList.add(grass)
      cells[57].classList.add(grass)
      cells[58].classList.add(grass)
      cells[59].classList.add(grass)
      cells[80].classList.add(grass)
      cells[81].classList.add(grass)
      cells[82].classList.add(grass)
      cells[83].classList.add(grass)
      cells[84].classList.add(grass)
      cells[85].classList.add(grass)
      cells[86].classList.add(grass)
      cells[87].classList.add(grass)
      cells[88].classList.add(grass)
      cells[89].classList.add(grass)
      cells[90].classList.add(grass)
      cells[91].classList.add(grass)
      cells[92].classList.add(grass)
      cells[93].classList.add(grass)
      cells[94].classList.add(grass)
      cells[95].classList.add(grass)
      cells[96].classList.add(grass)
      cells[97].classList.add(grass)
      cells[98].classList.add(grass)
      cells[99].classList.add(grass)
    }

    function removeGrass() {
      cells[30].classList.remove(grass)
      cells[31].classList.remove(grass)
      cells[32].classList.remove(grass)
      cells[33].classList.remove(grass)
      cells[34].classList.remove(grass)
      cells[35].classList.remove(grass)
      cells[36].classList.remove(grass)
      cells[37].classList.remove(grass)
      cells[38].classList.remove(grass)
      cells[39].classList.remove(grass)
      cells[50].classList.remove(grass)
      cells[51].classList.remove(grass)
      cells[52].classList.remove(grass)
      cells[53].classList.remove(grass)
      cells[54].classList.remove(grass)
      cells[55].classList.remove(grass)
      cells[56].classList.remove(grass)
      cells[57].classList.remove(grass)
      cells[58].classList.remove(grass)
      cells[59].classList.remove(grass)
      cells[80].classList.remove(grass)
      cells[81].classList.remove(grass)
      cells[82].classList.remove(grass)
      cells[83].classList.remove(grass)
      cells[84].classList.remove(grass)
      cells[85].classList.remove(grass)
      cells[86].classList.remove(grass)
      cells[87].classList.remove(grass)
      cells[88].classList.remove(grass)
      cells[89].classList.remove(grass)
      cells[90].classList.remove(grass)
      cells[91].classList.remove(grass)
      cells[92].classList.remove(grass)
      cells[93].classList.remove(grass)
      cells[94].classList.remove(grass)
      cells[95].classList.remove(grass)
      cells[96].classList.remove(grass)
      cells[97].classList.remove(grass)
      cells[98].classList.remove(grass)
      cells[99].classList.remove(grass)
    }





    // Functions to handle car movement right
    function car1DirectionRight() {
      let carInt = setInterval(() => {
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
        if (lives < 1) {
          removeCar(car1Pos)
          clearInterval(carInt)
        }
      }, carSpeed1);
    }

    function car2DirectionRight() {
      let carInt = setInterval(() => {

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
        if (lives < 1) {
          removeCar(car2Pos)
          clearInterval(carInt)
        }
      }, carSpeed1);
    }

    // Functions to handle car movement left
    function car3DirectionLeft() {
      let carInt = setInterval(() => {
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
        if (lives < 1) {
          removeCar(car3Pos)
          clearInterval(carInt)
        }
      }, carSpeed2);
    }

    function car4DirectionLeft() {
      let carInt = setInterval(() => {
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
        if (lives < 1) {
          removeCar(car4Pos)
          clearInterval(carInt)
        }
      }, carSpeed2);
    }

    // Functions to handle lorry front movement
    function lorry1FrontDirection() {
      let carInt = setInterval(() => {
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
        if (lives < 1) {
          removeLorryFront(lorry1FrontPos)
          clearInterval(carInt)
        }
      }, carSpeed1);
    }

    function lorry2FrontDirection() {
      let carInt = setInterval(() => {
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
        if (lives < 1) {
          removeLorryFront(lorry2FrontPos)
          clearInterval(carInt)
        }
      }, carSpeed1);
    }

    // Functions to handle lorry back movement 
    function lorry1BackDirection() {
      let carInt = setInterval(() => {
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
        if (lives < 1) {
          removeLorryBack(lorry1BackPos)
          clearInterval(carInt)
        }
      }, carSpeed1);
    }

    function lorry2BackDirection() {
      let carInt = setInterval(() => {
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
        if (lives < 1) {
          removeLorryBack(lorry2BackPos)
          clearInterval(carInt)
        }
      }, carSpeed1);
    }


    // Functions to handle movement of log

    function log1_2Move() {
      let carInt = setInterval(() => {
        if (frogPos === log1Pos || frogPos === log2Pos) {
          removeFrog(frogPos)
          frogPos++;
          addFrog(frogPos)
        }
        if (log1Pos % width !== width - 1) {
          removeLog1(log1Pos)
          log1Pos++
          addLog1(log1Pos)
        } else {
          removeLog1(log1Pos)
          log1Pos -= 9
          addLog1(log1Pos)
        }
        if (log2Pos % width !== width - 1) {
          removeLog2(log2Pos)
          log2Pos++
          addLog2(log2Pos)
        } else {
          removeLog2(log2Pos)
          log2Pos -= 9
          addLog2(log2Pos)
        }
        if (lives < 1) {
          removeLog1(log1Pos)
          removeLog2(log2Pos)
          clearInterval(carInt)
        }
      }, riverSpeed1);
    }

    function log3_4Move() {
      let carInt = setInterval(() => {
        if (frogPos === log3Pos || frogPos === log4Pos) {
          removeFrog(frogPos)
          frogPos++
          addFrog(frogPos)
        }
        if (log3Pos % width !== width - 1) {
          removeLog3(log3Pos)
          log3Pos++
          addLog3(log3Pos)
        } else {
          removeLog3(log3Pos)
          log3Pos -= 9
          addLog3(log3Pos)
        }
        if (log4Pos % width !== width - 1) {
          removeLog4(log4Pos)
          log4Pos++
          addLog4(log4Pos)
        } else {
          removeLog4(log4Pos)
          log4Pos -= 9
          addLog4(log4Pos)
        }
        if (lives < 1) {
          removeLog3(log3Pos)
          removeLog4(log4Pos)
          clearInterval(carInt)
        }
      }, riverSpeed1);
    }

    function log5_6Move() {
      let carInt = setInterval(() => {
        if (frogPos === log5Pos || frogPos === log6Pos) {
          removeFrog(frogPos)
          frogPos++
          addFrog(frogPos)
        }
        if (log5Pos % width !== width - 1) {
          removeLog5(log5Pos)
          log5Pos++
          addLog5(log5Pos)
        } else {
          removeLog5(log5Pos)
          log5Pos -= 9
          addLog5(log5Pos)
        }
        if (log6Pos % width !== width - 1) {
          removeLog6(log6Pos)
          log6Pos++
          addLog6(log6Pos)
        } else {
          removeLog6(log6Pos)
          log6Pos -= 9
          addLog6(log6Pos)
        }
        if (lives < 1) {
          removeLog5(log5Pos)
          removeLog6(log6Pos)
          clearInterval(carInt)
        }
      }, riverSpeed2);
    }

    function log7_8Move() {
      let carInt = setInterval(() => {
        if (frogPos === log7Pos || frogPos === log8Pos) {
          removeFrog(frogPos)
          frogPos++
          addFrog(frogPos)
        }
        if (log7Pos % width !== width - 1) {
          removeLog7(log7Pos)
          log7Pos++
          addLog7(log7Pos)
        } else {
          removeLog7(log7Pos)
          log7Pos -= 9
          addLog7(log7Pos)
        }
        if (log8Pos % width !== width - 1) {
          removeLog8(log8Pos)
          log8Pos++
          addLog8(log8Pos)
        } else {
          removeLog8(log8Pos)
          log8Pos -= 9
          addLog8(log8Pos)
        }
        if (lives < 1) {
          removeLog7(log7Pos)
          removeLog8(log8Pos)
          clearInterval(carInt)
        }
      }, riverSpeed2);
    }

    // Functions for movement of river
    function river1Move() {
      let carInt = setInterval(() => {
        if (river1Pos % width !== width - 1) {
          removeRiver1(river1Pos)
          river1Pos++
          addRiver1(river1Pos)
        } else {
          removeRiver1(river1Pos)
          river1Pos -= 9
          addRiver1(river1Pos)
        }
        if (lives < 1) {
          removeRiver1(river1Pos)
          clearInterval(carInt)
        }
      }, riverSpeed1);
    }

    function river2Move() {
      let carInt = setInterval(() => {
        if (river2Pos % width !== width - 1) {
          removeRiver2(river2Pos)
          river2Pos++
          addRiver2(river2Pos)
        } else {
          removeRiver2(river2Pos)
          river2Pos -= 9
          addRiver2(river2Pos)
        }
        if (lives < 1) {
          removeRiver2(river2Pos)
          clearInterval(carInt)
        }
      }, riverSpeed1);
    }

    function river3Move() {
      let carInt = setInterval(() => {
        if (river3Pos % width !== width - 1) {
          removeRiver3(river3Pos)
          river3Pos++
          addRiver3(river3Pos)
        } else {
          removeRiver3(river3Pos)
          river3Pos -= 9
          addRiver3(river3Pos)
        }
        if (lives < 1) {
          removeRiver3(river3Pos)
          clearInterval(carInt)
        }
      }, riverSpeed1);
    }

    function river4Move() {
      let carInt = setInterval(() => {
        if (river4Pos % width !== width - 1) {
          removeRiver4(river4Pos)
          river4Pos++
          addRiver4(river4Pos)
        } else {
          removeRiver4(river4Pos)
          river4Pos -= 9
          addRiver4(river4Pos)
        }
        if (lives < 1) {
          removeRiver4(river4Pos)
          clearInterval(carInt)
        }
      }, riverSpeed1);
    }

    function river5Move() {
      let carInt = setInterval(() => {
        if (river5Pos % width !== width - 1) {
          removeRiver5(river5Pos)
          river5Pos++
          addRiver5(river5Pos)
        } else {
          removeRiver5(river5Pos)
          river5Pos -= 9
          addRiver5(river5Pos)
        }
        if (lives < 1) {
          removeRiver5(river5Pos)
          clearInterval(carInt)
        }
      }, riverSpeed1);
    }

    function river6Move() {
      let carInt = setInterval(() => {
        if (river6Pos % width !== width - 1) {
          removeRiver6(river6Pos)
          river6Pos++
          addRiver6(river6Pos)
        } else {
          removeRiver6(river6Pos)
          river6Pos -= 9
          addRiver6(river6Pos)
        }
        if (lives < 1) {
          removeRiver6(river6Pos)
          clearInterval(carInt)
        }
      }, riverSpeed1);
    }


    function river7Move() {
      let carInt = setInterval(() => {
        if (river7Pos % width !== width - 1) {
          removeRiver7(river7Pos)
          river7Pos++
          addRiver7(river7Pos)
        } else {
          removeRiver7(river7Pos)
          river7Pos -= 9
          addRiver7(river7Pos)
        }
        if (lives < 1) {
          removeRiver7(river7Pos)
          clearInterval(carInt)
        }
      }, riverSpeed2);
    }

    function river8Move() {
      let carInt = setInterval(() => {
        if (river8Pos % width !== width - 1) {
          removeRiver8(river8Pos)
          river8Pos++
          addRiver8(river8Pos)
        } else {
          removeRiver8(river8Pos)
          river8Pos -= 9
          addRiver8(river8Pos)
        }
        if (lives < 1) {
          removeRiver8(river8Pos)
          clearInterval(carInt)
        }
      }, riverSpeed2);
    }

    function river9Move() {
      let carInt = setInterval(() => {
        if (river9Pos % width !== width - 1) {
          removeRiver9(river9Pos)
          river9Pos++
          addRiver9(river9Pos)
        } else {
          removeRiver9(river9Pos)
          river9Pos -= 9
          addRiver9(river9Pos)
        }
        if (lives < 1) {
          removeRiver9(river9Pos)
          clearInterval(carInt)
        }
      }, riverSpeed2);
    }

    function river10Move() {
      let carInt = setInterval(() => {
        if (river10Pos % width !== width - 1) {
          removeRiver10(river10Pos)
          river10Pos++
          addRiver10(river10Pos)
        } else {
          removeRiver10(river10Pos)
          river10Pos -= 9
          addRiver10(river10Pos)
        }
        if (lives < 1) {
          removeRiver10(river10Pos)
          clearInterval(carInt)
        }
      }, riverSpeed2);
    }

    function river11Move() {
      let carInt = setInterval(() => {
        if (river11Pos % width !== width - 1) {
          removeRiver11(river11Pos)
          river11Pos++
          addRiver11(river11Pos)
        } else {
          removeRiver11(river11Pos)
          river11Pos -= 9
          addRiver11(river11Pos)
        }
        if (lives < 1) {
          removeRiver11(river11Pos)
          clearInterval(carInt)
        }
      }, riverSpeed2);
    }

    function river12Move() {
      let carInt = setInterval(() => {
        if (river12Pos % width !== width - 1) {
          removeRiver12(river12Pos)
          river12Pos++
          addRiver12(river12Pos)
        } else {
          removeRiver12(river12Pos)
          river12Pos -= 9
          addRiver12(river12Pos)
        }
        if (lives < 1) {
          removeRiver12(river12Pos)
          clearInterval(carInt)
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
        sndCrash.play()
      } else if (frogPos === lilyPad1Pos || frogPos === lilyPad2Pos) {
        removeFrog(frogPos)
        frogPos = 94
        addFrog(frogPos)
        car1DirectionRight()
        car2DirectionRight()
        car3DirectionLeft()
        car4DirectionLeft()

        lorry1FrontDirection()
        lorry1BackDirection()
        lorry2FrontDirection()
        lorry2BackDirection()

        addLog1(log1Pos)
        addLog2(log2Pos)
        addLog3(log3Pos)
        addLog4(log4Pos)
        addLog5(log5Pos)
        addLog6(log6Pos)
        addLog7(log7Pos)
        addLog8(log8Pos)

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

        score += 1
        scoreDisplay.innerHTML = score
      }
      // Conditional to check if lives are less than one, run end game 
      else if (lives < 1) {
        removeFrog(frogPos)
        removeLilyPad(lilyPad1Pos)
        removeLilyPad(lilyPad2Pos)
        removeStillRiver(riverStillPos1)
        removeStillRiver(riverStillPos2)
        removeStillRiver(riverStillPos3)
        removeStillRiver(riverStillPos4)
        removeStillRiver(riverStillPos5)
        removeStillRiver(riverStillPos6)
        removeStillRiver(riverStillPos7)
        removeStillRiver(riverStillPos8)
        removeGrass()
        removeRoad()

        grid.classList.add('game-over')
        sndTrack.pause()
        sndGameOver.play()
      }
    }




    // Function for handling user inputs using key codes
    function handleUserInput(e) {
      // Conditional to check if lives are greater than one. If not, disable user input
      if (lives >= 1) {
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
      } else {
        const key = 0
      }
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


    log1_2Move()
    log3_4Move()
    log5_6Move()
    log7_8Move()

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