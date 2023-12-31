import game from './game'

const UI = (() => {
  const loadHome = () => {
    homeScreen()
    initHome()
  }

  const loadShipScreen = () => {
    removeContent()
    shipScreen()
    loadMainGrid()
    initMainGrid()
    orders('player1 place carrier')
  }

  const loadMain = () => {
    removeContent()
    mainScreen()
    loadGrid()
    initGrid()
    showShips()
    game.newGame()
  }

  const removeContent = () => {
    document.querySelector('main').remove()
  }

  const homeScreen = () => {
    const body = document.body

    let main = document.createElement('main')
    main.innerHTML = `
        <header>
            <div class="logo">
                <img id='logo' src="./logo.jpeg">
            </div>
        </header>
       <div class="home-inner">
            <div class="play-button">
                <h1>Play Game</h1>
            </div>
       </div>
        <footer>
            <span>Copyright © 2023 Declankb</span>
            <a href='https://github.com/DeclanKBrown' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
                </svg>
            </a>
        </footer>
        `

    body.appendChild(main)
  }

  const initHome = () => {
    const play = document.querySelector('.play-button')
    play.addEventListener('click', () => loadShipScreen())
  }

  const shipScreen = () => {
    const body = document.body

    let main = document.createElement('main')
    main.innerHTML = `
        <header>
            <div class="logo">
                <img id='logo' src="./logo.jpeg">
            </div>
        </header>
        <div class="place-ships">
            <div class="switch-axis" id="x">
                <svg class="switch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z" /></svg>
            </div>
            <div class="place-ships-inner">
                <h1 class="orders">Orders: Place Ships</h1>
            </div>
        </div>
        <div class="main-inner-ss">
            <div class="main-grid-outer">
                <div class="main-grid">
                </div>
            </div>
        </div>
        <footer>
            <span>Copyright © 2023 Declankb</span>
            <a href='https://github.com/DeclanKBrown' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
                </svg>
            </a>
        </footer>
        `

    body.appendChild(main)
  }

  const loadMainGrid = () => {
    let mainGrid = document.querySelector('.main-grid')
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 10; ++j) {
        let gridCell = document.createElement('div')
        gridCell.classList.add('grid-cell')
        gridCell.id = `L-${j}-${i}`
        mainGrid.appendChild(gridCell)
      }
    }
  }

  const initMainGrid = () => {
    document.querySelector('.switch-axis').addEventListener('click', () => {
      switchAxis()
      rotate()
    })

    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 10; ++j) {
        let gridCell = document.querySelector(`#L-${j}-${i}`)

        let x = parseInt(gridCell.id.split('-')[1])
        let y = parseInt(gridCell.id.split('-')[2])

        gridCell.addEventListener('mouseover', () => {
          shipHover(x, y)
        })

        gridCell.addEventListener('click', () => {
          p1PlaceShip(x, y)
        })
      }
    }
  }

  const switchAxis = () => {
    document.querySelector('.switch-axis').id === 'x'
      ? (document.querySelector('.switch-axis').id = 'y')
      : (document.querySelector('.switch-axis').id = 'x')
  }

  const rotate = () => {
    const svg = document.querySelector('.switch')

    svg.style.transform !== 'scaleX(-1)'
      ? (svg.style.transform = 'scaleX(-1)')
      : (svg.style.transform = 'scaleX(1)')
  }

  const shipHover = (x, y) => {
    removeHL()
    let direction = document.querySelector('.switch-axis').id
    let shipLength = getLength()
    if (direction === 'x') {
      if (x + shipLength > 10) {
        let gridCell = document.querySelector(`#L-${x}-${y}`)
        gridCell.classList.add('err')
      } else {
        if (!shipCanBePlaced(x, y, direction, shipLength)) {
          let gridCell = document.querySelector(`#L-${x}-${y}`)
          gridCell.classList.add('err')
        } else {
          for (let i = x; i < x + shipLength; ++i) {
            let gridCell = document.querySelector(`#L-${i}-${y}`)
            gridCell.classList.add('place-ship')
          }
        }
      }
    }
    if (direction === 'y') {
      if (y + shipLength > 10) {
        let gridCell = document.querySelector(`#L-${x}-${y}`)
        gridCell.classList.add('err')
      } else {
        if (!shipCanBePlaced(x, y, direction, shipLength)) {
          let gridCell = document.querySelector(`#L-${x}-${y}`)
          gridCell.classList.add('err')
        } else {
          for (let i = y; i < y + shipLength; ++i) {
            let gridCell = document.querySelector(`#L-${x}-${i}`)
            gridCell.classList.add('place-ship')
          }
        }
      }
    }
  }

  const removeHL = () => {
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 10; ++j) {
        let gridCell = document.querySelector(`#L-${j}-${i}`)
        gridCell.classList.remove('place-ship')
        gridCell.classList.remove('err')
      }
    }
  }

  const getLength = () => {
    if (!game.isCarrierPlaced()) {
      return 5
    } else if (!game.isBattleshipPlaced()) {
      return 4
    } else if (!game.isCruiserPlaced()) {
      return 3
    } else if (!game.isSubmarinePlaced()) {
      return 3
    } else if (!game.isDestroyerPlaced()) {
      return 2
    }
  }

  const mainScreen = () => {
    const body = document.body

    let main = document.createElement('main')
    main.innerHTML = `
        <header>
            <div class="logo">
                <img id='logo' src="./logo.jpeg">
            </div>
        </header>
        <div class="message">
            <div class="message-inner">
                <h1 class="orders">Orders: Fire Away</h1>
            </div>
        </div>
        <div class="main-inner">
            <div class="main-left">
                <h2>Friendly Waters</h2>
                <div class="left-grid-outer">
                    <div class="left-grid">
                    </div>
                </div>
            </div>
            <div class="main-right">
                <h2>Enemy Waters</h2>
                <div class="right-grid-outer">
                    <div class="right-grid">
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <span>Copyright © 2023 Declankb</span>
            <a href='https://github.com/DeclanKBrown' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
                </svg>
            </a>
        </footer>
        `

    body.appendChild(main)
  }

  const loadGrid = () => {
    let leftGrid = document.querySelector('.left-grid')
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 10; ++j) {
        let gridCell = document.createElement('div')
        gridCell.classList.add('grid-cell')
        gridCell.id = `L-${j}-${i}`
        leftGrid.appendChild(gridCell)
      }
    }

    let rightGrid = document.querySelector('.right-grid')
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 10; ++j) {
        let gridCell = document.createElement('div')
        gridCell.classList.add('grid-cell')
        gridCell.id = `R-${j}-${i}`
        rightGrid.appendChild(gridCell)
      }
    }
  }

  const initGrid = () => {
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 10; ++j) {
        let gridCell = document.querySelector(`#R-${j}-${i}`)

        let x = gridCell.id.split('-')[1]
        let y = gridCell.id.split('-')[2]

        gridCell.addEventListener('click', async () => {
          if (!game.gameEnded() && game.canPlay()) {
            if (game.player1.isLegal(game.computer.board, x, y)) {
              await game.player1.attack(x, y, game.computer.board)
              // colorGrid()
              game.flow(true)
            } else {
              await orders('player1 already shot')
            }
          }
        })
      }
    }
  }

  const showShips = () => {
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 10; ++j) {
        if (game.player1.board.getBoard()[j][i].hasShip) {
          let gridCell = document.querySelector(`#L-${j}-${i}`)
          gridCell.classList.add('hasShip')
        }
      }
    }
  }

  const colorGrid = () => {
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 10; ++j) {
        if (
          game.computer.board.getBoard()[j][i].isShot &&
          !game.computer.board.getBoard()[j][i].hasShip
        ) {
          let gridCell = document.querySelector(`#R-${j}-${i}`)
          gridCell.classList.add('isShot')
        }
        if (
          game.computer.board.getBoard()[j][i].isShot &&
          game.computer.board.getBoard()[j][i].hasShip
        ) {
          let gridCell = document.querySelector(`#R-${j}-${i}`)
          gridCell.classList.add('isShothasShip')
        }

        if (game.player1.board.getBoard()[j][i].isShot) {
          let gridCell = document.querySelector(`#L-${j}-${i}`)
          gridCell.classList.add('isShot')
        }
      }
    }
  }

  const placeShip = (x, y, direction, ship, player) => {
    if (direction === 'x') {
      for (let i = x; i < x + ship.length; ++i) {
        let gridCell = document.querySelector(`#L-${i}-${y}`)
        gridCell.classList.add('hasShip')
      }
    } else {
      for (let i = y; i < y + ship.length; ++i) {
        let gridCell = document.querySelector(`#L-${x}-${i}`)
        gridCell.classList.add('hasShip')
      }
    }
  }

  const orders = async (order) => {
    if (order === 'compAttacking') {
      document.querySelector('.orders').innerHTML = 'Enemy Attacking'
    } else if (order === 'computer hit') {
      document.querySelector('.orders').innerHTML = 'Enemy Hits'
    } else if (order === 'computer misses') {
      document.querySelector('.orders').innerHTML = 'Enemy Misses'
    } else if (order === 'player1 turn') {
      document.querySelector('.orders').innerHTML = 'Your Turn'
    } else if (order === 'player1 hit') {
      document.querySelector('.orders').innerHTML = 'You Hit'
    } else if (order === 'player1 missed') {
      document.querySelector('.orders').innerHTML = 'You Missed'
    } else if (order === 'player1 place carrier') {
      document.querySelector('.orders').innerHTML = 'Place Carrier'
    } else if (order === 'player1 place battleship') {
      document.querySelector('.orders').innerHTML = 'Place Battleship'
    } else if (order === 'player1 place cruiser') {
      document.querySelector('.orders').innerHTML = 'Place Cruiser'
    } else if (order === 'player1 place submarine') {
      document.querySelector('.orders').innerHTML = 'Place Submarine'
    } else if (order === 'player1 place destroyer') {
      document.querySelector('.orders').innerHTML = 'Place Destroyer'
    } else if (order === 'ships placed') {
      document.querySelector('.orders').innerHTML = 'Ships Placed'
    } else if (order === 'player1 win') {
      document.querySelector('.orders').innerHTML = 'You Win'
    } else if (order === 'computer wins') {
      document.querySelector('.orders').innerHTML = 'Computer Wins'
    } else if (order === 'player1 already shot') {
      document.querySelector('.orders').innerHTML = 'Already Attacked Postion'
    }
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  const p1PlaceShip = (x, y) => {
    let direction = document.querySelector('.switch-axis').id
    if (shipCanBePlaced(x, y, direction, 0)) {
      if (!game.isCarrierPlaced()) {
        game.placeCarrier(x, y, direction, 0)
      } else if (!game.isBattleshipPlaced()) {
        game.placeBattleship(x, y, direction, 0)
      } else if (!game.isCruiserPlaced()) {
        game.placeCruiser(x, y, direction, 0)
      } else if (!game.isSubmarinePlaced()) {
        game.placeSubmarine(x, y, direction, 0)
      } else if (!game.isDestroyerPlaced()) {
        game.placeDestroyer(x, y, direction, 0)
      }
    }
  }

  const shipCanBePlaced = (x, y, direction, shipLength) => {
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 10; ++j) {
        let gridCell = document.querySelector(`#L-${j}-${i}`)
        if (gridCell.classList.contains('err')) {
          return false
        }
      }
    }
    if (!shipLength !== 0) {
      if (direction === 'x') {
        for (let i = x; i < x + shipLength; ++i) {
          if (game.player1.board.getBoard()[i][y].hasShip) {
            return false
          }
        }
      }
      if (direction === 'y') {
        for (let i = y; i < y + shipLength; ++i) {
          if (game.player1.board.getBoard()[x][i].hasShip) {
            return false
          }
        }
      }
      return true
    }
  }

  return { loadHome, placeShip, colorGrid, orders, loadMain }
})()

export default UI
