let message = document.getElementById('message')
let result = document.getElementById('result')

message.oninput = function () {
    let max = 30
    this.value = this.value.substring(0, max)
    console.log(this.value.substring(0, max))
    let remain = max - this.value.length
    result.innerHTML = 'remaining character' + remain
} 