import Player from '../factories/player'
import Ship from '../factories/ship'
import UI from './UI'

const game = (() => {
    const player1 = Player()
    const computer = Player()
    let waiting = false;
    
    const newGame = () => {
        player1Ships()
        computerShips()
    }

    const flow = async (P1played) => {
        if (!gameEnded()) {
            if (P1played) {
                waiting = true
                await UI.orders('compAttacking');
                computer.randomAttack(player1.board);
                UI.colorGrid();
                await UI.orders('player1 turn');
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

    const player1Ships = () => {
        UI.orders('player1 place carrier')
        player1.board.placeShip(0, 0, 'x', Ship(5, 'carrier'))
        UI.placeShip(0, 0, 'x', Ship(5, 'carrier'), 'L')

        UI.orders('player1 place battleship')
        player1.board.placeShip(9, 5, 'y', Ship(4, 'battleship'))
        UI.placeShip(9, 5, 'y', Ship(4, 'battleship'), 'L')

        UI.orders('player1 place cruiser')
        player1.board.placeShip(3, 6, 'x', Ship(3, 'cruiser'))
        UI.placeShip(3, 6, 'x', Ship(3, 'cruiser'), 'L')

        UI.orders('player1 place submarine')
        player1.board.placeShip(1, 3, 'y', Ship(3, 'submarine'))
        UI.placeShip(1, 3, 'y', Ship(3, 'submarine'), 'L')

        UI.orders('player1 place destroyer')
        player1.board.placeShip(8, 2, 'x', Ship(2, 'destroyer'))
        UI.placeShip(8, 2, 'x', Ship(2, 'destroyer'), 'L')

        UI.orders('ships placed')
        UI.orders('player1 turn')
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

    return { player1, computer, newGame, flow, gameEnded, canPlay }
})()

export default game