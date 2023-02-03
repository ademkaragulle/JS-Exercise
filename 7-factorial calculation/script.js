
function factorial() {
    let number = Number(document.getElementById('number').value)
    let factorial = 1

    

    if (number > 0) {
        for (i = 1; i <= number; i++) {
            factorial = factorial * i
        }
    } else if (number <= 0){
        for (i = -1; i >= number; i--) {
            factorial = factorial * i
        }
    }

    alert(factorial)
}