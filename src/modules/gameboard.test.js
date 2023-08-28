import Gameboard from './gameboard'
import Ship from './ship'

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