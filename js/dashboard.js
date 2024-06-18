import { arr } from '../resources/json.js'

const fileString = JSON.stringify(arr)
const json = fileString.split(',')
const authParams = new URLSearchParams(window.location.search);
const containerApp = document.getElementById('containerApp')
const radioList = document.getElementsByTagName('input')

if (!authParams.get('auth')) {
    alert('Logueate Primero')
    window.location.href = '../index.html'
}

function insertBoxes() {
    clean()
    filter = this
    console.log('Filtro seleccionado: ' + filter.id)
    const jsonLenght = json.length
    let cont = 0
    let img = []
    for (let i = jsonLenght; i--;) {
        if (json[i].includes(filter.id)) {
            img.push(i)
            cont += 1
        }
    }

    const boxesNumber = getComputedStyle(document.body).getPropertyValue('--imagesPerContainer');
    const containersInApp = Math.ceil(img.length / boxesNumber)
    for (let i = 0; i < containersInApp; i++) {
        const newContainer = containerApp.appendChild(document.createElement('div'))
        newContainer.setAttribute('class', 'containerBoxes containerBoxes' + i)
    }

    const containersCreated = document.getElementsByClassName('containerBoxes')
    let counter = 0
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
                img.style.backgroundImage = 'url(../resources/pictures/' + filter.id + '-' + (counter + 1) + '.webp'

                const info = boxImage.appendChild(document.createElement('div'))
                info.setAttribute('class', 'info')

                console.log('../resources/pictures/' + filter.id + '-' + (counter + 1) + '.webp')
            }
            counter += 1
        }
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
    radioList[0].addEventListener('click', insertBoxes)
    radioList[1].addEventListener('click', insertBoxes)
    radioList[2].addEventListener('click', insertBoxes)
    radioList[3].addEventListener('click', insertBoxes)
}