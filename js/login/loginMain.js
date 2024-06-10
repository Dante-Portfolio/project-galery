// 1 obtenerlos valores de los inputs del form menos del disparador de animacion
// 2 comprobar si el usuario ha escrito los datos
//      2.1 comprobar si tienen espacios en blanco y avisar al usuario
// 3 guardar datos en navegador e importar si existen
//      3.1 pasar la funcion a modulo para importarla desde loginValidation
// 4 configurar usuario y contraseña
//      4.1 si todo corecto boton redirige a login validation

const user = document.getElementById('user')
const pass = document.getElementById('pass')
let checkbox = document.getElementById('checkbox')
const send = document.getElementById('send')

let userEmpty
let passEmpty
let validateCheck
let validateWrited
let validateText
let validateForm

function testForm() {
    let userValue = user.value
    let passValue = pass.value
    let checkboxValue = checkbox.checked

    if (userValue == '') { userEmpty = true } else { userEmpty = false }
    if (passValue == '') { passEmpty = true } else { passEmpty = false }

    if (userEmpty == true || passEmpty == true) {
        validateWrited = false
    } else {
        validateWrited = true 
    }
    console.log(validateWrited)

    if (userValue.split(' ').length !== 1 || passValue.split(' ').length !== 1) {
        validateText = false
    } else {
        validateText = true 
    }
    console.log(validateText)

    if (checkboxValue !== true) {
        validateCheck = false
    } else {
        validateCheck = true
    }
    console.log(validateCheck)

    if (validateWrited == true && validateText == true && validateCheck == true) {
        validateForm = true
    } else {
        validateForm = false
    }
}

send.addEventListener('click', testForm)
