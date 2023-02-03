
function button() {

    let r = document.querySelector('#radius').value
    let area = ((Math.PI) * r * r).toFixed(2)
    let circumference  = ((Math.PI) * r * 2).toFixed(2)
    alert(`Area = ${area}
Circumference  = ${circumference }`)
}