import Player from '../factories/player'
import Ship from '../factories/ship'
import UI from './UI'

const game = (() => {
  const player1 = Player()
  const computer = Player()
  let waiting = false
  let carrierPlaced = false
  let battleShipPlaced = false
  let cruiserPlaced = false
  let submarinePlaced = false
  let destroyerPlaced = false

  const newGame = () => {
    computerShips()
  }

  const flow = async (P1played) => {
    if (!gameEnded()) {
      if (P1played) {
        waiting = true
        await UI.orders('compAttacking')
        await computer.randomAttack(player1.board)
        UI.orders('player1 turn')
        waiting = false
      }
    }
  }

  const canPlay = () => {
    if (waiting) {
      return false
    }
    return true
  }

  const gameEnded = () => {
    if (player1.board.reportSunk()) {
      UI.orders('computer wins')
      return true
    } else if (computer.board.reportSunk()) {
      UI.orders('player1 win')
      return true
    }
    return false
  }

  const placeCarrier = (x, y, direction) => {
    player1.board.placeShip(x, y, direction, Ship(5, 'carrier'))
    UI.placeShip(x, y, direction, Ship(5, 'carrier'), 'L')
    carrierPlaced = true
    UI.orders('player1 place battleship')
  }

  const isCarrierPlaced = () => {
    return carrierPlaced
  }

  const placeBattleship = (x, y, direction) => {
    player1.board.placeShip(x, y, direction, Ship(4, 'battleship'))
    UI.placeShip(x, y, direction, Ship(4, 'battleship'), 'L')
    battleShipPlaced = true
    UI.orders('player1 place cruiser')
  }

  const isBattleshipPlaced = () => {
    return battleShipPlaced
  }

  const placeCruiser = (x, y, direction) => {
    player1.board.placeShip(x, y, direction, Ship(3, 'cruiser'))
    UI.placeShip(x, y, direction, Ship(3, 'cruiser'), 'L')
    cruiserPlaced = true
    UI.orders('player1 place submarine')
  }

  const isCruiserPlaced = () => {
    return cruiserPlaced
  }

  const placeSubmarine = (x, y, direction) => {
    player1.board.placeShip(x, y, direction, Ship(3, 'submarine'))
    UI.placeShip(x, y, direction, Ship(3, 'submarine'), 'L')
    submarinePlaced = true
    UI.orders('player1 place destroyer')
  }

  const isSubmarinePlaced = () => {
    return submarinePlaced
  }

  const placeDestroyer = async (x, y, direction) => {
    player1.board.placeShip(x, y, direction, Ship(2, 'destroyer'))
    UI.placeShip(x, y, direction, Ship(2, 'destroyer'), 'L')
    destroyerPlaced = true
    await UI.orders('ships placed')
    UI.loadMain()
  }

  const isDestroyerPlaced = () => {
    return destroyerPlaced
  }

  const computerShips = () => {
    //CARRIER
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    let direction = Math.floor(Math.random() * 2)
    direction === 0 ? (direction = 'x') : (direction = 'y')

    while (!isLegal(x, y, direction, 5)) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
    }
    computer.board.placeShip(x, y, direction, Ship(5, 'carrier'))

    // BATTLESHIP
    x = Math.floor(Math.random() * 10)
    y = Math.floor(Math.random() * 10)
    direction = Math.floor(Math.random() * 2)
    direction === 0 ? (direction = 'x') : (direction = 'y')

    while (!isLegal(x, y, direction, 5)) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
    }
    computer.board.placeShip(x, y, direction, Ship(4, 'battleship'))

    //CRUISER
    x = Math.floor(Math.random() * 10)
    y = Math.floor(Math.random() * 10)
    direction = Math.floor(Math.random() * 2)
    direction === 0 ? (direction = 'x') : (direction = 'y')

    while (!isLegal(x, y, direction, 5)) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
    }
    computer.board.placeShip(x, y, direction, Ship(3, 'cruiser'))

    //SUBMARINE
    x = Math.floor(Math.random() * 10)
    y = Math.floor(Math.random() * 10)
    direction = Math.floor(Math.random() * 2)
    direction === 0 ? (direction = 'x') : (direction = 'y')

    while (!isLegal(x, y, direction, 5)) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
    }
    computer.board.placeShip(x, y, direction, Ship(3, 'submarine'))

    //DESTORYER
    x = Math.floor(Math.random() * 10)
    y = Math.floor(Math.random() * 10)
    direction = Math.floor(Math.random() * 2)
    direction === 0 ? (direction = 'x') : (direction = 'y')

    while (!isLegal(x, y, direction, 5)) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
    }
    computer.board.placeShip(x, y, direction, Ship(2, 'destroyer'))
  }

  const isLegal = (x, y, direction, shipLength) => {
    if (x + shipLength > 10) {
      return false
    }
    if (y + shipLength > 10) {
      return false
    }
    if (direction === 'x') {
      for (let i = x; i < x + shipLength; ++i) {
        if (computer.board.getBoard()[i][y].hasShip) {
          return false
        }
      }
    }
    if (direction === 'y') {
      for (let i = y; i < y + shipLength; ++i) {
        if (computer.board.getBoard()[x][i].hasShip) {
          return false
        }
      }
    }
    return true
  }

  return {
    player1,
    computer,
    newGame,
    flow,
    gameEnded,
    canPlay,
    placeCarrier,
    isCarrierPlaced,
    placeBattleship,
    isBattleshipPlaced,
    placeCruiser,
    isCruiserPlaced,
    placeSubmarine,
    isSubmarinePlaced,
    placeDestroyer,
    isDestroyerPlaced,
  }
})()

export default game
