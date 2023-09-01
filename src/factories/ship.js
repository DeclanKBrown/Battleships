const Ship = (len, nam) => {
  let length = len
  let name = nam
  let numHits = 0
  let sunk = false

  const hit = () => (numHits = numHits + 1)

  const isSunk = () => (numHits === length ? (sunk = true) : (sunk = false))

  return { length, name, hit, isSunk }
}

export default Ship
