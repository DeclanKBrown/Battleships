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
                await UI.orders('compAttacking');
                await computer.randomAttack(player1.board);
                UI.orders('player1 turn');
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

    const placeCarrier = (x, y) => {
        player1.board.placeShip(x, y, 'x', Ship(5, 'carrier'))
        UI.placeShip(x, y, 'x', Ship(5, 'carrier'), 'L')
        carrierPlaced = true
        UI.orders('player1 place battleship')
    }

    const isCarrierPlaced = () => {
        return carrierPlaced
    }

    const placeBattleship = (x, y) => {
        player1.board.placeShip(x, y, 'y', Ship(4, 'battleship'))
        UI.placeShip(x, y, 'y', Ship(4, 'battleship'), 'L')
        battleShipPlaced = true
        UI.orders('player1 place cruiser')
    }

    const isBattleshipPlaced = () => {
        return battleShipPlaced
    }

    const placeCruiser = (x, y) => {
        player1.board.placeShip(x, y, 'x', Ship(3, 'cruiser'))
        UI.placeShip(x, y, 'x', Ship(3, 'cruiser'), 'L')
        cruiserPlaced = true
        UI.orders('player1 place submarine')
    }

    const isCruiserPlaced = () => {
        return cruiserPlaced
    }

    const placeSubmarine = (x, y) => {
        player1.board.placeShip(x, y, 'x', Ship(3, 'submarine'))
        UI.placeShip(x, y, 'x', Ship(3, 'submarine'), 'L')
        submarinePlaced = true
        UI.orders('player1 place destroyer')
    }

    const isSubmarinePlaced = () => {
        return submarinePlaced
    }

    const placeDestroyer = async (x, y) => {
        player1.board.placeShip(x, y, 'x', Ship(2, 'destroyer'))
        UI.placeShip(x, y, 'x', Ship(2, 'destroyer'), 'L')
        destroyerPlaced = true
        await UI.orders('ships placed')
        UI.loadMain()
    }

    const isDestroyerPlaced = () => {
        return destroyerPlaced
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

    return { player1, computer, newGame, flow, gameEnded, canPlay, placeCarrier, isCarrierPlaced, placeBattleship, isBattleshipPlaced, placeCruiser, isCruiserPlaced, placeSubmarine, isSubmarinePlaced, placeDestroyer, isDestroyerPlaced }
})()

export default game