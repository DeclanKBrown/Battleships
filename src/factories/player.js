import Gameboard from './gameboard'
import UI from '../modules/UI'

const Player = () => {
    const board = Gameboard()

    const attack = (x, y, opponentBoard) => {
        opponentBoard.receiveAttack(x, y)
        if (opponentBoard.getBoard()[x][y].hasShip) {
            UI.orders('player1 hit')
        } else {
            UI.orders('player1 missed')
        }
    }

    const isLegal = (opponentBoard, x, y) => {
        if (opponentBoard.getBoard()[x][y].isShot === false) {
            return true
        } else {
            return false
        }

    }

    const randomAttack = async (opponentBoard) => {
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)

        while (!isLegal(opponentBoard, x, y)) {
            x = Math.floor(Math.random() * 10)
            y = Math.floor(Math.random() * 10)
        }

        opponentBoard.receiveAttack(x, y)
        UI.colorGrid()
        if (opponentBoard.getBoard()[x][y].hasShip) {
            await UI.orders('computer hit')
        } else {
            await UI.orders('computer misses')
        }
    }

    return { board, attack, randomAttack, isLegal }
} 

export default Player
