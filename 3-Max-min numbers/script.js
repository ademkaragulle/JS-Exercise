let array = new Array(20)

for (i = 0; i < array.length; i++) {
    let random = (Math.floor(Math.random() * 100))
    document.write(`<li>${Number(random)}</li></br>`)
    if (array.indexOf(Number(random)) < 0) {
        array[i] = random
        // document.write
    } else {
        i--
    }
}
let min = array[0]
let max = array[0]

for (i = 0; i < array.length; i++) {
    if (min > array[i]) {
        min = array[i]
    } if (max < array[i]) {
        max = array[i]
    }
}
alert(`min ${min}
max ${max}`)
document.write(`<h1>min ${min}</h1>`)
document.write(`<h1>min ${max}</h1>`)
