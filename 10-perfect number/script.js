
function myFunction() {
    let array, number, result;
    array = []
    number = Number(document.getElementById('txt').value)
    result = 0



    for (i = 1; i < number; i++) {
        if (number % i == 0) {
            array.push(i)
        }
    }
    for (i = 0; i < array.length; i++) {
        result = result + array[i]
    }
    if (result == number) {
        document.getElementById('result').innerText = `The number ${number} is a perfect number. `
    } else {
        document.getElementById('result').innerText = `The number ${number} is not a perfect number. `
    }
}

