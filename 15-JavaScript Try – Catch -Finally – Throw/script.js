document.querySelector('#sbm').disabled = true
function myFunction() {
    // debugger

    let message = document.getElementById('warning');
    let identity = document.getElementById('identity')
    let identityValue = identity.value
    if (identityValue.length !== 11) {
        document.querySelector('#sbm').disabled = true
    } else {
        document.querySelector('#sbm').disabled = false
    }
    try {
        if (identityValue.trim() == "") throw "is empty"
        if (isNaN(identityValue)) throw "is a not number"
        if (identityValue.length < 11) throw "ID number cannot be less than 11 characters"
        if (identityValue.length > 11) throw "ID number cannot exceed 11 characters"
        if (identityValue.length = 11) throw ""
    }
    catch (err) {
        message.innerHTML = err
    }

}