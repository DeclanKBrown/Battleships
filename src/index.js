import './style.css'
import UI from './modules/UI'
import game from './modules/game'


document.addEventListener('DOMContentLoaded', () => {
    UI.loadHome()
    game.newGame()
})