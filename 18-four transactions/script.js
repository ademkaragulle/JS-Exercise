let inputOne = document.getElementById('valueOne')
let inputTwo = document.getElementById('valueTwo')
let add = document.getElementById('add')
let ext = document.getElementById('extraction')
let div = document.getElementById('division')
let mult = document.getElementById('multiplication')
let result1 = document.getElementById('result')
let errOne = document.getElementById('errOne')
let errTwo = document.getElementById('errTwo')



inputOne.onkeyup = function () {
    let valueOne = Number(inputOne.value)
    try {
        if (isNaN(valueOne)) throw 'value one isn\'t a number'
        if (!isNaN(valueOne)) throw ''
    }
    catch (err) {
        errOne.innerText = ' ' + err
    }
}

inputTwo.onkeyup = function () {
    let valueTwo = Number(inputTwo.value)
    try {
        if (isNaN(valueTwo)) throw 'value two isn\'t a number'
        if (!isNaN(valueTwo)) throw ''
    }
    catch (err) {
        errTwo.innerText = ' ' + err
    }
}




add.onclick = function () {
    let valueOne = Number(inputOne.value)
    let valueTwo = Number(inputTwo.value)
    let result = valueOne + valueTwo
    result1.innerHTML = 'Result : ' + result
}

ext.onclick = function () {
    let valueOne = Number(inputOne.value)
    let valueTwo = Number(inputTwo.value)
    let result = valueOne - valueTwo
    result1.innerHTML = 'Result : ' + result
}

mult.onclick = function () {
    let valueOne = Number(inputOne.value)
    let valueTwo = Number(inputTwo.value)
    let result = valueOne / valueTwo
    result1.innerHTML = 'Result : ' + result
}

div.onclick = function () {
    let valueOne = Number(inputOne.value)
    let valueTwo = Number(inputTwo.value)
    let result = valueOne * valueTwo
    result1.innerHTML = 'Result : ' + result
}
