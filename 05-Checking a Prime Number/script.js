
function prime() {
    let array = []
    let number = Number(document.getElementById('numberOne').value)
    for (i = 2; i < number; i++) {
        if(number % i == 0){
            array.push('' + i)
        }
    }
    if (array.length < 1) {
        document.getElementById('text').innerText = `'${number}' is a prime number`
    } else {
        document.getElementById('text').innerText = `'${number}' is not a prime number and the number is divided exactly with ${array}`
    }

}