document.write("<table border='3'><tr>");
for (i = 1; i <= 10; i++) {
    document.write(`<td>`)
    for (k = 1; k <= 10; k++) {
        // debugger
        document.write(`${i} x ${k} = ${i * k} <br>`)
    }
    if (i == 5) {
        document.write('</tr><tr>')
    }
    document.write('</td>')
}
document.write('</tr></table>')