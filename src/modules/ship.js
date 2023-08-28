const Ship = (len) => {
    let length = len
    let numHits = 0
    let sunk = false

    const hit = () => numHits = numHits + 1

    const isSunk = () => numHits === length ? sunk = true : sunk = false

    return { hit, isSunk }

}

export default Ship