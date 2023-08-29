import Player from '../player'
import Gameboard from '../gameboard'
import Ship from '../ship'

test('Attack player function', () => {
    const me = Player()
    const opponent = Player()

    //Create comparision board
    let comp = []
    for (let i = 0; i < 10; ++i) {
        comp[i] = []
        for (let j = 0; j < 10; ++j) {
            comp[i][j] = { hasShip: false, isShot: false }
        }
    }
    for (let i = 1; i < 1 + 5; ++i) {
        comp[i][1].hasShip = 'carrier'
    }
    comp[1][1].isShot = true                    //Shot at 1, 1


    const carrier = Ship(5, 'carrier')          //Create carrier
    opponent.board.placeShip(1,1, 'x', carrier) //Place on opeenents board

    me.attack(1, 1, opponent.board)
    expect(opponent.board.getBoard()).toEqual(comp)
})

test('Random attack function', () => {
    const me = Player()
    const opponent = Player()

    //Create comparision board
    let comp = []
    for (let i = 0; i < 10; ++i) {
        comp[i] = []
        for (let j = 0; j < 10; ++j) {
            comp[i][j] = { hasShip: false, isShot: false }
        }
    }
    for (let i = 1; i < 1 + 5; ++i) {
        comp[i][1].hasShip = 'carrier'
    }

    const carrier = Ship(5, 'carrier')          //Create carrier
    opponent.board.placeShip(1,1, 'x', carrier) //Place on opeenents board

    me.randomAttack(opponent.board)
    expect(opponent.board.getBoard()).not.toEqual(comp)
})