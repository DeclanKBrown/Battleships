import Gameboard from './gameboard'

const Player = () => {
    const board = Gameboard()

    const attack = (x, y, opponentBoard) => {
        opponentBoard.receiveAttack(x, y)
    }

    const isLegal = (opponentBoard, x, y) => {
        if (opponentBoard.getBoard()[x][y].isShot === false) {
            return true
        } else {
            return false
        }

    }

    const randomAttack = (opponentBoard) => {
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)

        while (!isLegal(opponentBoard, x, y)) {
            x = Math.floor(Math.random() * 10)
            y = Math.floor(Math.random() * 10)
        }

        opponentBoard.receiveAttack(x, y)
    }

    return { board, attack, randomAttack }
} 

export default Player
