import Ship from './ship'

test('hit function', () => {
    let yacht = Ship(3)
    yacht.hit()
    expect(yacht.hit()).toBe(2)
})

test('Is Sunk function', () => {
    let yacht = Ship(3)
    yacht.hit()
    yacht.hit()
    yacht.hit()
    expect(yacht.isSunk()).toBe(true)
})