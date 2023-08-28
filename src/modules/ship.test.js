import Ship from './ship'


test ('Ship length return correct', () => {
    let carrier = Ship(3)
    expect(carrier.length).toBe(3)
})

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