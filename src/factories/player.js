import Gameboard from './gameboard'

const Player = () => {
    const board = Gameboard()

    const attack = (x, y, opponentBoard) => {
        opponentBoard.receiveAttack(x, y)
    }

    const randomAttack = (opponentBoard) => {
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)

        while (opponentBoard.getBoard()[x][y].isShot === false) {
            let x = Math.floor(Math.random() * 10)
            let y = Math.floor(Math.random() * 10)
            opponentBoard.receiveAttack(x, y)
            return
        }
    }

    return { board, attack, randomAttack }
} 

export default Player
