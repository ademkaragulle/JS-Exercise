function button() {
    // debugger;
    let short = Number(document.getElementById('short').value)
    let long = Number(document.getElementById('long').value)

    if (isNaN(short)) {
        console.log(typeof(sort))
        alert('pls enter the number')
    } else {
        if (isNaN(long)) {
            alert('pls enter the number')
        } else {
            alert(short * long)
        }
    }
}

