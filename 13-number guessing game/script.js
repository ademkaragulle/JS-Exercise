let gNum, right
let start = document.querySelector('#start')
let guess = document.querySelector('#guess')
let number = document.querySelector('#number')
let text = document.getElementById('text')
guess.disabled = true

start.onclick = function () {
    guess.disabled = false
    gNum = Math.ceil(Math.random() * 100)
    console.log(gNum    )
    right = 3
    text.innerText = (`You have =${right} right`)
    start.innerText = 'Start'
}

guess.onclick = function () {
    let nGuess = Number(number.value)
    right -= 1
    if (gNum !== nGuess && right == 0) {
        alert('game over')
        guess.disabled = true
        text.innerText = (`You have no right `)
    } else if (gNum !== nGuess && right !== 0) {
        text.innerText = (`You have =${right} right`)
        start.innerText = 'Over Start'
    }


    if (gNum < nGuess && right !== 0) {
        alert('number < guess')
    } else if (nGuess < gNum && right !== 0) {
        alert('guess < number')
    } else if (gNum == nGuess) {
        alert('guess is true')
        guess.disabled = true
        text.innerText = (`Congratulations, you win on the ${3-right}nd try`)
    }
}


