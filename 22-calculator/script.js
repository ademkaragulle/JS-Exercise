let number = document.querySelector('#number')
let result = document.getElementById('result')
let value1, transactions;

result.innerText = '0'

number.addEventListener('click', function (e) {
    const element = e.target;
    let operators = ['/', 'x', '+', '-']

    if (result.innerText.includes('=') && operators.includes(element.innerText)) {
        result.innerText = result.innerText.substring(1, result.innerText.length)

    }
    if (result.innerText.includes('=') && !operators.includes(element.innerText)) {
        result.innerText = '0'
    }

    if (operators.includes(result.innerText)) {
        result.innerText = ''
    }

    if (element.id == 'number') return;

    if (element.classList.contains('equal-sign')) {
        equal()
        return
    }

    if (element.classList.contains('operator')) {
        operator(element.innerText)
        return;
    }

    if (element.classList.contains('clear')) {
        clear()
        return;
    }

    if (element.classList.contains('cClear')) {
        cClear()
        return;
    }

    if (element.classList.contains('decimal')) {
        decimal()
        return;
    }
    numberInput(element.innerText)
})


function numberInput(num) {
    result.innerText = result.innerText === '0' ? num : result.innerText + num
}

function decimal() {
    if (!result.innerText.includes('.')) {
        result.innerText += '.'
    }
}

function clear() {
    result.innerText = '0'
    value1 == ''
}

function cClear() {
    result.innerText = result.innerText.length == 1 ? '0' : result.innerText.substring(0, result.innerText.length - 1)
}

function operator(process) {
    value1 = Number(result.innerText)
    transactions = process
    result.innerText = process
}

function equal() {
    // debugger
    let value2 = Number(result.innerText)
    let display;

    if (transactions == '+') {
        display = value1 + value2

    }

    if (transactions === '-') {
        display = value1 - value2
    }

    if (transactions == 'x') {
        display = value1 * value2
    }

    if (transactions == '/') {
        display = value1 / value2
    }
    if (display == undefined) {
        display = 0
    }
    result.innerText = '=' + display

}

