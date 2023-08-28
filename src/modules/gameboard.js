const GameBoard = () => {
    //Initialize board
    let board = []
    for (let i = 0; i < 10; ++i) {
        board[i] = []
        for (let j = 0; j < 10; ++j) {
            board[i][j] = { hasShip: false, isShot: false }
        }
    }

    const placeShip = (x,y, direction, ship) => {
        if (direction === 'x') {
            for (let i = x; i < x + ship.length; ++i) {
                board[i][y].hasShip = true
            }
        } else {
            for (let i = y; i < y + ship.length; ++i) {
                board[x][i].hasShip = true
            }
        }
    }

    const receiveAttack = (x, y, ship) => {
        board[x][y].isShot = true
        board[x][y].hasShip === true ? ship.hit() : undefined
    }
    
    const reportSunk = () => {
        
    }

    const getBoard = () => {
        return board;
    }

    return { placeShip, receiveAttack, getBoard }
}

export default GameBoard