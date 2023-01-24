


let fxCon = document.getElementsByClassName("flex-container")

for (i = 0; i < 7; i++) {
    let fxDiv = fxCon[i].getElementsByTagName("div")
    for (j = 0; j < 7; j++) {
        if (i == 0) {
            fxDiv[j].innerHTML = `<p>${j + 1}</p>`
        } if (i !== 0) {
            fxDiv[j].innerHTML = `<p>${7 * (i) + j + 1}</p>`
        }
    }
}

let array = []
function gl() {
    let mathR = Math.floor(Math.random() * 50)
    console.log(mathR)
    for (i = 0; i < 7; i++) {
        let txt = fxCon[i].getElementsByTagName("div")
        for (j = 0; j < 7; j++) {
            let txt1 = txt[j].innerText
            if (mathR == txt1) {
                txt[j].classList.add("active")
                if(array.length<6){
                    array.push(mathR)
                    console.log(array)
                    document.getElementById('winning').innerHTML=array
                } 
            }
            let classAc = document.getElementsByClassName('active').length
            if (classAc == 7 && mathR == txt1) {
                txt[j].classList.remove("active")
                alert('Lottery Raffle Completed')
            }
        }
    }
}




function rf() {
    let aclengt = document.getElementsByClassName('active').length
    for (i = 0; i < aclengt-1; i++) {
        let adem = document.querySelector('.active')
        adem.classList.remove('active')
    }
}


