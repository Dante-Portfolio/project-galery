function saveData() {
    let userValue = user.value
    let passValue = pass.value

    window.localStorage.setItem('user',userValue)
    window.localStorage.setItem('pass',passValue)
    console.log('Datos guardados: ' + userValue + ' ' + passValue)
}

function loadUser () {
    const userPreview = window.localStorage.getItem('user')
    return userPreview
}

function loadPass () {
    const passPreview = window.localStorage.getItem('pass')
    return passPreview
}

if (loadUser) {
    user.value = loadUser()
}

if (loadUser) {
    pass.value = loadPass()
}

export {
    saveData,
    loadUser,
    loadPass
}