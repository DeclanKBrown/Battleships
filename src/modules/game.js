import Player from '../factories/player'
import Ship from '../factories/ship'
import UI from './UI'

const game = (() => {
    const player1 = Player()
    const computer = Player()
    
    const newGame = () => {
        player1Ships()
        computerShips()
    }

    const attack = (x, y, oppenentBoard) => {
        player1.attack(x, y, oppenentBoard)
        if (player1.board.reportSunk() || computer.board.reportSunk()) {
            console.log('fuck')
        }
    }

    const player1Ships = () => {
        player1.board.placeShip(0, 0, 'x', Ship(5, 'carrier'))
        UI.placeShip(0, 0, 'x', Ship(5, 'carrier'), 'L')

        player1.board.placeShip(9, 5, 'y', Ship(4, 'battleship'))
        UI.placeShip(9, 5, 'y', Ship(4, 'battleship'), 'L')

        player1.board.placeShip(3, 6, 'x', Ship(3, 'cruiser'))
        UI.placeShip(3, 6, 'x', Ship(3, 'cruiser'), 'L')

        player1.board.placeShip(1, 3, 'y', Ship(3, 'submarine'))
        UI.placeShip(1, 3, 'y', Ship(3, 'submarine'), 'L')

        player1.board.placeShip(8, 2, 'x', Ship(2, 'destroyer'))
        UI.placeShip(8, 2, 'x', Ship(2, 'destroyer'), 'L')
    }

    const computerShips = () => {
        computer.board.placeShip(0, 0, 'x', Ship(5, 'carrier'))
        UI.placeShip(0, 0, 'x', Ship(5, 'carrier'), 'R')

        computer.board.placeShip(9, 5, 'y', Ship(4, 'battleship'))
        UI.placeShip(9, 5, 'y', Ship(4, 'battleship'), 'R')

        computer.board.placeShip(3, 6, 'x', Ship(3, 'cruiser'))
        UI.placeShip(3, 6, 'x', Ship(3, 'cruiser'), 'R')

        computer.board.placeShip(1, 3, 'y', Ship(3, 'submarine'))
        UI.placeShip(1, 3, 'y', Ship(3, 'submarine'), 'R')

        computer.board.placeShip(8, 2, 'x', Ship(2, 'destroyer'))
        UI.placeShip(8, 2, 'x', Ship(2, 'destroyer'), 'R')
    }

    return { player1, computer, newGame, attack }
    
})()

export default game