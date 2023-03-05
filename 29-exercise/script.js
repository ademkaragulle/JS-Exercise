function change(element) {
    var stringOne = ''
    for (i = 0; i < element.length; i++) {
        if (element[i + 1] !== '#' && element[i] !== '#') {
            stringOne += element[i]
        }
    }
    return stringOne
}


function valueOne() {
    var valueOne = document.getElementById('valueOne').value
    var valueTwo = document.getElementById('valueTwo').value

    let one = change(valueOne);
    let two = change(valueTwo)

    console.log(one,two)
    if (one == two) {
        console.log('pass')
    } else {
        console.log('fail')
    }
}