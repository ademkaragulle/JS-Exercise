
function reverse(rev) {
    return String(rev).split("").reverse().join("")
}


function find() {
    let number = Number(document.getElementById('button').value)
    numberPlus = number
    numberMinus = number
    if (number == reverse(number)) {
        console.log(number)
    } else {
        while (true) {
            numberPlus += 1
            numberMinus -= 1
            let reverseOne = reverse(numberPlus)
            let reverseTwo = reverse(numberMinus)
            if (numberPlus == reverseOne) {
                console.log(numberPlus)
                break
            }
            if (numberMinus == reverseTwo) {
                console.log(numberMinus)
                break
            }
        }
    }
}