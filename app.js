const userSelect = document.getElementById('user')
const houseSelect = document.getElementById('house')
const resultToShow = document.getElementById('result-show')
const resultsEl = document.querySelector('.results')
const gameArea = document.querySelector('.game-area')

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const playAgainBtn = document.getElementById('restart')

const compProperties = [
    "rock.png",
    "paper.png",
    "scissors.png"
]

const scoreEl = document.getElementById('score')
let scoreCount = 0

rockButton.addEventListener('click', function () {
    let randomValue = compProperties[Math.floor(Math.random() * compProperties.length)]
    houseSelect.innerHTML = `<img src="images/${randomValue}" />`
    if (randomValue === "rock.png") {
        resultToShow.textContent = "IT'S A TIE"
    } else if (randomValue === "paper.png") {
        resultToShow.textContent = "YOU LOOSE"
    } else {
        scoreCount++
        scoreEl.textContent = scoreCount
        resultToShow.textContent = "YOU WIN"
    }
    userSelect.innerHTML = `<img src="images/rock.png" />`
    gameArea.style.display = 'none'
    resultsEl.style.display = 'flex'
    playAgainBtn.addEventListener('click', () => {
        resultsEl.style.display = 'none'
        gameArea.style.display = 'block'
    })
})


paperButton.addEventListener('click', function () {
    let randomValue = compProperties[Math.floor(Math.random() * compProperties.length)]
    houseSelect.innerHTML = `<img src="images/${randomValue}" />`
    if (randomValue === "paper.png") {
        resultToShow.textContent = "IT'S A TIE"
    } else if (randomValue === "scissors.png") {
        resultToShow.textContent = "YOU LOOSE"
    } else {
        scoreCount++
        scoreEl.textContent = scoreCount
        resultToShow.textContent = "YOU WIN"
    }
    userSelect.innerHTML = `<img src="images/paper.png" />`
    gameArea.style.display = 'none'
    resultsEl.style.display = 'flex'
    playAgainBtn.addEventListener('click', () => {
        resultsEl.style.display = 'none'
        gameArea.style.display = 'block'
    })
})

scissorsButton.addEventListener('click', function () {
    let randomValue = compProperties[Math.floor(Math.random() * compProperties.length)]
    houseSelect.innerHTML = `<img src="images/${randomValue}" />`
    if (randomValue === "scissors.png") {
        resultToShow.textContent = "IT'S A TIE"
    } else if (randomValue === "rock.png") {
        resultToShow.textContent = "YOU LOOSE"
    } else {
        scoreCount++
        scoreEl.textContent = scoreCount
        resultToShow.textContent = "YOU WIN"
    }
    userSelect.innerHTML = `<img src="images/scissors.png" />`
    gameArea.style.display = 'none'
    resultsEl.style.display = 'flex'
    playAgainBtn.addEventListener('click', () => {
        resultsEl.style.display = 'none'
        gameArea.style.display = 'block'
    })
}) 