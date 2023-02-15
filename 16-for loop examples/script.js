document.write('<h3>Example 1</h3>Printing numbers from 1 to 10 <ul>')
for (i = 1; i < 11; i++) {
    document.write(`<li>${i}</li>`)
}
document.write('</ul><br>')

document.write('<h3>Example 2</h3>printing "example 2" times 10 <ul>')
for (i = 0; i < 10; i++) {
    document.write(`<li>Example 2</li>`)
}
document.write('</ul>')

document.write('<h3>Example 3</h3>Printing even numbers from 1-50 on the screen<ul>')
for (i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        document.write(`<li>${i}</li>`)
    }
}
document.write('</ul>')

document.write('<h3>Example 4</h3>Printing numbers 1-100, divisible by 3 and 5, to the screen<ul>')
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write(`<li>${i}</li>`)
    }
}
document.write('</ul>')

document.write('<h3>Example 5</h3>Print the text entered by the user on the screen as many times as the number entered by the user.<br><ul>')
    let number = Number(prompt('enter the number'))
    let txt = prompt('enter the text')
    for (i = 1; i <= number; i++) {
        document.write(`<li>${txt}</li>`)
    }
document.write('</ul>')

document.write('<h3>Example 6</h3>printing h tags to screen<ul>')

for (i = 1; i <= 6; i++) {
    document.write(`<li><h${i}>h${i}</h${i}></li>`)
}
document.write('</ul>')

