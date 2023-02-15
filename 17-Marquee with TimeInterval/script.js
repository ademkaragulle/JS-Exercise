let sentence = document.getElementById('text')

function scrollingText() {

    setInterval(function () {
        let length = sentence.innerText.length
        let letter = sentence.innerText.substring(0, 1)
        let other = sentence.innerText.substring(1, length)
        // console.log(letter)

        if (letter == 'H' || letter =='W') {
            other = other + ' ' + letter
        } else {
            other = other + letter
        }
        sentence.innerText = other
    }, 1000)
}

scrollingText()
