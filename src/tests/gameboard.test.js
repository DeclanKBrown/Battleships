import Gameboard from '../modules/gameboard'
import Ship from '../modules/ship'


test('place ship function', () => {
    //Make Comparison Board
    let comp = []
    for (let i = 0; i < 10; ++i) {
        comp[i] = []
        for (let j = 0; j < 10; ++j) {
            comp[i][j] = { hasShip: false, isShot: false }
        }
    }

    //Add hasShip to comp board
    for (let i = 1; i < 1 + 5; ++i) {
        comp[i][1].hasShip = true
    }

    const carrier = Ship(5)                     //Create carrier
    const board = Gameboard()                   //Create board
    board.placeShip(1,1, 'x', carrier)          //Place ship on board

    expect(board.getBoard()).toEqual(comp)
})

test ('Receive attack function', () => {
    //Make Comparison Board
    let comp = []
    for (let i = 0; i < 10; ++i) {
        comp[i] = []
        for (let j = 0; j < 10; ++j) {
            comp[i][j] = { hasShip: false, isShot: false }
        }
    }

    //Add hasShip to comp board and simulate ship is sunk
    for (let i = 1; i < 1 + 5; ++i) {
        comp[i][1].hasShip = true
        comp[i][1].isShot = true
    }

    const carrier = Ship(5)                     //Create carrier
    const board = Gameboard()                   //Create board
    board.placeShip(1,1, 'x', carrier)          //Place ship on board

    // simulate carrier is sunk
    board.receiveAttack(1, 1, carrier) 
    board.receiveAttack(2, 1, carrier) 
    board.receiveAttack(3, 1, carrier) 
    board.receiveAttack(4, 1, carrier) 
    board.receiveAttack(5, 1, carrier) 

    expect(board.getBoard()).toEqual(comp)
    expect(carrier.isSunk()).toEqual(true)
})

test ('report sunk function', () => {
    //Make Comparison Board
    let comp = []
    for (let i = 0; i < 10; ++i) {
        comp[i] = []
        for (let j = 0; j < 10; ++j) {
            comp[i][j] = { hasShip: false, isShot: false }
        }
    }

    //Add hasShip to comp board and simulate ship is sunk
    for (let i = 1; i < 1 + 5; ++i) {
        comp[i][1].hasShip = true
        comp[i][1].isShot = true
    }

    const carrier = Ship(5)                     //Create carrier
    const board = Gameboard()                   //Create board
    board.placeShip(1,1, 'x', carrier)          //Place ship on board

    // simulate carrier is sunk
    board.receiveAttack(1, 1, carrier) 
    board.receiveAttack(2, 1, carrier) 
    board.receiveAttack(3, 1, carrier) 
    board.receiveAttack(4, 1, carrier) 
    board.receiveAttack(5, 1, carrier) 

    expect(board.reportSunk()).toEqual(true)
})