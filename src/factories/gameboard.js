const Gameboard = () => {
    //Initialize board
    let board = []
    for (let i = 0; i < 10; ++i) {
        board[i] = []
        for (let j = 0; j < 10; ++j) {
            board[i][j] = { hasShip: false, isShot: false }
        }
    }
    //Ships
    let carrier
    let battleShip
    let submarine
    let cruiser
    let destoryer

    const assignShip = (ship) => {
        if (ship.name === 'carrier') {
            carrier = ship
        } else if (ship.name = 'battleShip') {
            battleShip = ship
        } else if (ship.name === 'submarine') {
            submarine = ship
        } else if (ship.name === 'cruiser') {
            cruiser = ship
        } else if (ship.name === 'destroyer') {
            destoryer = ship
        }
    }

    const placeShip = (x,y, direction, ship) => {
        assignShip(ship) 
        if (direction === 'x') {
            for (let i = x; i < x + ship.length; ++i) {
                board[i][y].hasShip = ship.name
            }
        } else {
            for (let i = y; i < y + ship.length; ++i) {
                board[x][i].hasShip = ship.name
            }
        }
    }

    const hitShip = (name) => {
        if (name === 'carrier') {
            carrier.hit()
        } else if (name === 'battleShip') {
            battleShip.hit()
        } else if (name === 'submarine') {
            submarine.hit()
        } else if (name === 'cruiser') {
            cruiser.hit()
        } else if (name === 'destroyer') {
            destoryer.hit()
        }
    }

    const receiveAttack = (x, y) => {
        board[x][y].isShot = true
        if (board[x][y].hasShip !== false) {
            let name = board[x][y].hasShip
            hitShip(name)
        }
    }
    
    const reportSunk = () => {
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                if (board[j][i].isShot === false && board[j][i].hasShip !== false)
                 return false
            }
        }
        return true
    }

    const getBoard = () => {
        return board;
    }

    return { placeShip, receiveAttack, reportSunk, getBoard }
}

export default Gameboard