let user = document.getElementById('userName'),
    password = document.getElementById('password'),
    rotate = document.getElementById('rotate'),
    btn = document.getElementById('submitBtn'),
    sbmt = document.getElementById('submit'),
    warning = document.getElementById('warning'),
    enter = document.getElementById('entered'),
    infoWar = document.getElementById('infoWar'),
    counter = 0;


function mouse() {
    // debugger
    let left = btn.offsetLeft
    let right = sbmt.offsetWidth - (btn.offsetLeft + btn.offsetWidth)
    if (left < 5) {
        let ıntervalOne = setInterval(function () {
            left += 1;
            btn.style.left = left + "px"
            if (left == sbmt.offsetWidth - btn.offsetWidth - 6) {
                clearInterval(ıntervalOne)
            }
        }, .1)
    }
    if (right < 5) {
        let ıntervalTwo = setInterval(function () {
            left -= 1;
            btn.style.left = left + "px"
            if (left == 0) {
                clearInterval(ıntervalTwo)
            }
        }, .1)
    }
}

warning.style.visibility = 'hidden'
btn.addEventListener('mouseover', function () {
    try {
        if (user.value.trim() == "") throw "ID can not empty"
        if (password.value.trim() == "") throw "Password can not empty"
    }
    catch (err) {
        warning.innerText = err
    }
    if (user.value == "" || password.value == "") {
        mouse()
        warning.style.visibility = 'visible'
    } else {
        warning.style.visibility = 'hidden'
    }
})
let deg = 0,
    hei = 260,
    wid = 260;

function entered() {
    // debugger
    const color = setInterval(function () {
        deg += 1
        if (hei > 20) {
            hei -= 0.5
            wid -= 0.5
        }
        rotate.style.webkitTransform = 'rotate(' + deg + 'deg)';
        rotate.classList.add('bg')
        enter.style.opacity = (100 - deg) + "%"
        rotate.style.borderRadius = `${deg}%`
        rotate.style.height = hei + "px"
        rotate.style.width = wid + "px"

        if (hei == 21) {
            deg = 360
            rotate.innerHTML = '<i class="bi bi-check-lg"></i>'
        }
        if (hei == 20) {
            clearInterval(color)
        }
    }, .1)
}

submitBtn.onclick = function signIn() {
    if (user.value == 'admin' && password.value == '123') {
        entered()
    } else if (user.value !== 'admin' || password.value !== '123') {
        warning.innerText = 'ID or Password is not true'
        warning.style.visibility = 'visible'
    }
}


function formInput() {
    if (password.value !== '' && user.value !== '') {
        btn.style.left = 0 + "px"
        btn.classList.add('btnB')
    } else {
        btn.classList.remove('btnB')
    }
}

function info() {
    const count = setInterval(function () {
        counter += 1
        infoWar.style.opacity = counter + "%"
        if (counter == 100) clearInterval(count)
    }, 1)
    setTimeout(function () {
        const countO = setInterval(function () {
            counter -= 1
            infoWar.style.opacity = counter + "%"
            if (counter == 0) clearInterval(countO)
        }, 1)
    }, 3000)
}