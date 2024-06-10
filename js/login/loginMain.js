// 1 obtenerlos valores de los inputs del form menos del disparador de animacion
// 2 comprobar si el usuario ha escrito los datos
//      2.1 comprobar si tienen espacios en blanco y avisar al usuario
// 3 guardar datos en navegador e importar si existen
//      3.1 pasar la funcion a modulo para importarla desde loginValidation
// 4 configurar usuario y contraseña
//      4.1 si todo corecto boton redirige a login validation

const user = document.getElementById('user').value
const pass = document.getElementById('pass').value
const checkbox = document.getElementById('checkbox').checked

let userEmpty
let passEmpty
let validateCheck
let validateWrited = true
let validateText = true
let validateForm = true

function testForm() {
    if (user == '') { userEmpty = true } else { userEmpty = false }
    if (pass == '') { passEmpty = true } else { passEmpty = false }

    if (userEmpty == true || passEmpty == true) {
        validateWrited = false
    }

    if (user.split(' ').length !== 1 || pass.split(' ').length !== 1) {
        validateText = false
    }

    if (checkbox !== true) {
        validateCheck = false
    }

    if ( validateWrited == false || validateText == false || validateCheck == false) {
        validateForm = false
    } else {
        validateForm = true
    }

    console.log(validateForm + ' validateForm')
}

testForm()