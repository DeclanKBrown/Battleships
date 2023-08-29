import Ship from '../ship'


test ('Ship length return correct', () => {
    let carrier = Ship(3, 'carrier')
    expect(carrier.length).toBe(3)
})

test('Ship name retrned correct',() => {
    let carrier = Ship(3, 'carrier')
    expect(carrier.name).toEqual('carrier')
})

test('hit function', () => {
    let yacht = Ship(3, 'yacht')
    yacht.hit()
    expect(yacht.hit()).toBe(2)
})

test('Is Sunk function', () => {
    let yacht = Ship(3, 'yacht')
    yacht.hit()
    yacht.hit()
    yacht.hit()
    expect(yacht.isSunk()).toBe(true)
})