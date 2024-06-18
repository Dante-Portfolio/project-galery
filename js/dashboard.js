
import { arr as json } from '../resources/json.js'

// const fileString = JSON.stringify(arr)
// const json = fileString.split(',')
const authParams = new URLSearchParams(window.location.search)
const containerApp = document.getElementById('containerApp')
const radioList = document.getElementsByTagName('input')

if (!authParams.get('auth')) {
    alert('Logueate Primero')
    window.location.href = '../index.html'
}

function insertBoxes(event) {
    clean()
    filter = event.target
    console.log('Filtro seleccionado: ' + filter.id)
    const jsonLenght = json.length
    let cont = 0
    let imgs = []
    for (let photo of json) {
        if (filter.id === 'img' || photo.includes(filter.id)) {
            imgs.push(photo)
            cont += 1
        }
    }

    const boxesNumber = getComputedStyle(document.body).getPropertyValue('--imagesPerContainer');
    const containersInApp = Math.ceil(imgs.length / boxesNumber)
    for (let i = 0; i < containersInApp; i++) {
        const newContainer = containerApp.appendChild(document.createElement('div'))
        newContainer.setAttribute('class', 'containerBoxes containerBoxes' + i)
    }

    const containersCreated = document.getElementsByClassName('containerBoxes')
    let counter = 0
    let row_counter = 0
    for (let newContainer of containersCreated) {
        for (let i = 0; i < boxesNumber; i++) {
            if (counter < jsonLenght) {
                const box = newContainer.appendChild(document.createElement('div'))
                box.setAttribute('class', 'boxInput')

                const boxRadio = box.appendChild(document.createElement('div'))
                boxRadio.setAttribute('class', 'radio')

                const boxImage = box.appendChild(document.createElement('div'))
                boxImage.setAttribute('class', 'boxImage')

                const img = boxImage.appendChild(document.createElement('div'))
                img.setAttribute('class', 'img')
                img.style.backgroundImage = 'url(../resources/pictures/' + imgs[row_counter+counter]

                const info = boxImage.appendChild(document.createElement('div'))
                info.setAttribute('class', 'info')
            }
            counter += 1
        }
        row_counter++
    }
    img = []
}

let filter
function clean() {
    if (document.getElementById('img').checked = true) {
        console.log('Imagenes cargadas por defecto')
        containerApp.innerHTML = ""
    }
}

for (let i = radioList.length; i--;) {
    radioList[1].addEventListener('click', insertBoxes)
    radioList[2].addEventListener('click', insertBoxes)
    radioList[3].addEventListener('click', insertBoxes)
    radioList[4].addEventListener('click', insertBoxes)
}
console.log(radioList)
insertBoxes({ target: document.getElementById('img') })
