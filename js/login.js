// 1 obtenerlos valores de los inputs del form menos del disparador de animacion
// 2 comprobar si el usuario ha escrito los datos
//      2.1 comprobar si tienen espacios en blanco y avisar al usuario
// 3 guardar datos en navegador e importar si existen
//      3.1 pasar la funcion a modulo para importarla desde loginValidation
// 4 configurar usuario y contraseña
//      4.1 si todo corecto boton redirige a login validation

import * as storage from './modules/storage.js'

const user = document.getElementById('user')
const pass = document.getElementById('pass')
const conditions = document.getElementById('conditions')
const send = document.getElementById('send')

storage.loadUser()
storage.loadPass

let validateText

function testForm() {
    let userValue = user.value
    let passValue = pass.value

    if (userValue.split(' ').length !== 1 || passValue.split(' ').length !== 1) {
        validateText = false
        alert('Los campos no deben contener espacios')
    } else {
        storage.saveData()
        window.location.href = '../html/auth.html'
    }
}

function changeConditions() {
    if (send.disabled) {
        send.removeAttribute('disabled')
    } else {
        send.disabled = true
    }
}

conditions.onclick = changeConditions
send.addEventListener('click', testForm)
