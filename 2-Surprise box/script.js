let moneyTree = document.getElementById('moneyTree')
let money = moneyTree.getElementsByTagName('div')
let boxes = document.getElementById('boxes')
let box = boxes.getElementsByTagName('div')


for (i = 0; i < money.length; i++) {
    money[i].classList.add('money')
    box[i].classList.add('box')
    if (i < 11) {
        money[i].classList.add('blue')
    } else if (10 < i && i < 19) {
        money[i].classList.add('yellow')
    } else {
        money[i].classList.add('red')
    }
}

let arrayMoney = [1, 2, 5, 10, 15, 25, 50, 100, 400, 500, 750, 1000, 2500, 5000, 10000, 15000, 20000, 25000, 50000, 150000, 250000, 500000, 500000, 500000]
for (i = 0; i < arrayMoney.length; i++) {
    money[i].innerText = arrayMoney[i]
}

let sonuc = arrayMoney.sort(function (a, b) { return 0.5 - Math.random() });
console.log(sonuc)
for (i = 0; i < arrayMoney.length; i++) {
    box[i].id = arrayMoney[i]
    box[i].innerText = i + 1
}


let adem = []
let mami = []
let fatma = [1, 2, 5, 10, 15, 25, 50, 100, 400, 500, 750, 1000, 2500, 5000, 10000, 15000, 20000, 25000, 50000, 150000, 250000, 500000, 500000, 500000]

boxes.addEventListener('click', function (e) {
    let arrayMoney = [1, 2, 5, 10, 15, 25, 50, 100, 400, 500, 750, 1000, 2500, 5000, 10000, 15000, 20000, 25000, 50000, 150000, 250000, 500000, 500000, 500000]
    // let slc = boxes.getElementsByClassName('selected').innerText
    let opnBox = e.target.innerText
    adem.push((`${e.target.id}`))

    if (e.target.id == '500000') {
        mami.push('500000')
    }

    if (adem.length == 1) {
        e.target.classList.add('selected')
        e.target.innerText = '?'
        let slc = e.target.id
    }
    else if (adem.length > 1) {
        e.target.classList.add('open')
        opnBox = (`${e.target.id}`)
        e.target.innerText = e.target.id
        let opnBox1 = Number(opnBox)
        money[arrayMoney.indexOf(opnBox1)].classList.add('open')
        fatma.splice(fatma.indexOf(opnBox1), 1)
        console.log(fatma.indexOf(opnBox1))
        console.log(fatma)
    }
    if (mami.length == 2) {
        money[22].classList.add('open')
    } else if (mami.length == 3) {
        money[23].classList.add('open')
    }
    if (adem.length % 3 == 1 && adem.length !== 1) {
        let offer = 0
        for (var i = 1; i < fatma.length; i++) {
            offer += Number(fatma[i]) / (fatma.length);
            offer = Math.floor(offer)
        }
        document.getElementById('smith').innerHTML = `<h1>Mr. Smith: ${offer} $</h1>`
        if (confirm(offer) == true) {
            alert(`Kazandınız = ${offer}
Kutunuzdaki para ${document.getElementsByClassName('selected')[0].id}`)
            window.location.reload()
        }
    }

})