const authParams = new URLSearchParams(window.location.search);

// if (!authParams.get('auth')) {
//     alert('Logueate Primero')
//     window.location.href = '../index.html'
// }

const pics = document.getElementsByClassName('img')
console.log(pics)
let contador = 0

for (let pic of pics) {
    console.log(pic)
    contador += 1
    // pic.textContent = contador
    pic.style.backgroundImage = 'url(../resources/pictures/' + contador + '.webp'
}  
